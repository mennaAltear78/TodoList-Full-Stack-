"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  FormField,
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { todoformSchema } from "@/Schema";
import { Button } from "@/components/ui/button";
import { Pen, Plus } from "lucide-react";
import { createTodeoActions, updateTodeoActions } from "@/actions/todo.actions";
import { Checkbox } from "@/components/ui/checkbox";

import Spinner from "./Spinner";
import { Todo } from "@/interfaces/TodoInterface";
import { Textarea } from "./textarea";

export const EditTodoForm = ({ todo }: { todo: Todo },userId:string|null) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isloading, setIsLoading] = useState<boolean>(false);
 

  const form = useForm<z.infer<typeof todoformSchema>>({
    resolver: zodResolver(todoformSchema),
    defaultValues: {
      title: todo.title,
      body: todo.body as string,
      completed: todo.completed,
    },
  });
  const onSubmit = async ({ title, body, completed  }: z.infer<typeof todoformSchema>) => {
    //Action to update the todo
     console.log("created");
    await updateTodeoActions({
      id: todo.id,
      title,
      body: body as string,
      completed: completed as boolean,
      user_id:userId as string,
    });
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-10 mr-2">
          {/* {isloading? <Spinner /> : <Trash className="h-4 w-4" />} */}
          {isloading ? <Spinner /> : <Pen className="h-4 w-4" />}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>title</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
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
                    <FormLabel>body</FormLabel>
                    <FormControl>
                      <Textarea placeholder="shadcn" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        type="checkbox"
                        className="mr-2 h-3 w-3"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    </FormControl>
                    <FormLabel>completed</FormLabel>
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
