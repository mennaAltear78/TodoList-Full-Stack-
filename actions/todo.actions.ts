"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { Todo } from "@/interfaces/TodoInterface";

const prisma = new PrismaClient();

// ✅ Get all todos (latest first)
export const getTodeoUserActions = async ({ user_id }: { user_id: string|null }) => {
//  throw new Error("This function is not implemented yet.");
  try {
    return await prisma.todo.findMany({
      where: {
        user_id: user_id as string,
      },
      orderBy: {
        createAt: "desc",
      },
    });
  } catch (error) {
    throw error;
  }
};

// ✅ Create a new todo
export const createTodeoActions = async ({
  title,
  body,
  completed,
  user_id,
}: {
  title: string;
  body: string;
  completed: boolean;
  user_id: string | null;
}) => {
  try {
    await prisma.todo.create({
      data: {
        title,
        body,
        completed,
        createAt: new Date(),
        user_id: user_id as string, // static user id for now
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

// ✅ Update a todo
export const updateTodeoActions = async ({
  id,
  title,
  body,
  completed,
  user_id,
}: Todo) => {
  try {
    await prisma.todo.update({
      where: { id },
      data: {
        title,
        body,
        completed,
        user_id: user_id as string,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// ✅ Delete a todo
export const deleteTodoAction = async ({ id }: { id: string }) => {
  try {
    const deletedTodo = await prisma.todo.delete({
      where: { id },
    });
    revalidatePath("/");
    return deletedTodo;
  } catch (error) {
    console.error("Failed to delete todo:", error);
    throw new Error("Could not delete todo.");
  }
};
