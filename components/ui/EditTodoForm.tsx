"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  FormField,
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { todoformSchema } from "@/Schema";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { updateTodeoActions } from "@/actions/todo.actions";
import Spinner from "./Spinner";
import { Todo } from "@/interfaces/TodoInterface";
import { Textarea } from "./textarea";

export const EditTodoForm = ({
  todo,
  userId,
}: {
  todo: Todo;
  userId: string | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isloading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof todoformSchema>>({
    resolver: zodResolver(todoformSchema),
    defaultValues: {
      title: todo.title,
      body: todo.body as string,
      completed: todo.completed,
    },
  });

  const onSubmit = async ({
    title,
    body,
    completed,
  }: z.infer<typeof todoformSchema>) => {
    try {
      await updateTodeoActions({
        id: todo.id,
        title,
        body: body as string,
        completed: completed as boolean,
        user_id: userId as string,
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-10 mr-2">
          {isloading ? <Spinner /> : <Pen className="h-4 w-4" />}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Body</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Body..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    </FormControl>
                    <FormLabel className="mb-0">Completed</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
