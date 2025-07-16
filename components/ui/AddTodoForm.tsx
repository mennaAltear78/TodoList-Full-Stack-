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
import { Plus } from "lucide-react";
import { createTodeoActions } from "@/actions/todo.actions";

import { Textarea } from "./textarea";

export const AddTodoForm = ({ userId }: { userId: string | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof todoformSchema>>({
    resolver: zodResolver(todoformSchema),
    defaultValues: {
      title: "",
      body: "",
      completed: false,
    },
  });
  const onSubmit = async ({
    title,
    body,
    completed,
  }: z.infer<typeof todoformSchema>) => {
    console.log("created");

    await createTodeoActions({
      title,
      body: body as string,
      completed: completed as boolean,
      user_id: userId as string,
    });
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex justify-end">
          <Button variant={"secondary"} className="w-[100px] ">
            <Plus size={14} />
            Add todo
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
         <DialogTitle></DialogTitle>
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
