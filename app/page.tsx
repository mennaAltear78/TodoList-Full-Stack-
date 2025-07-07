import { getTodeoUserActions } from "@/actions/todo.actions";
import ModeToggle from "@/components/ModeToggle";
import { AddTodoForm } from "@/components/ui/AddTodoForm";
import { TodoTable } from "@/components/ui/TodoTable";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId:user_id } = await auth();


  const todos = await getTodeoUserActions({user_id});

  return (
    <div className="w-[700px] flex flex-col m-auto gap-4 mt-4">
      <div className="flex justify-between items-center">
        <ModeToggle />
        <header className="flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>

      <AddTodoForm userId={user_id} />
      <TodoTable userId={user_id} tododata={todos} />
    </div>
  );
}
