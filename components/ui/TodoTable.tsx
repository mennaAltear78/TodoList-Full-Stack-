'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Todo } from '../../interfaces/TodoInterface';

import { Badge } from "@/components/ui/badge"

import TodosActions from "./TodosActions";


interface TodoTableProps {
  tododata: Todo[];
}

export function TodoTable({ tododata  }: TodoTableProps ,userId:string|null) {


  return (
    <Table >
      <TableCaption>List of todos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] ">ID</TableHead>
          <TableHead className="w-[150px]  ">Title</TableHead>
          <TableHead className="w-[150px] flex justify-center">Body</TableHead>
          <TableHead className="w-[70px] ">Completed</TableHead>
          <TableHead className="w-[150px] text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tododata.map((todo,index) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{index+1}</TableCell>
            <TableCell className="font-medium">{todo.title}</TableCell>
            <TableCell className="flex justify-center mr-10">{todo.body?todo.body:'---'}</TableCell>
            <TableCell   >{todo.completed ? <Badge className="bg-[#22ee229d] text-white">completed</Badge> : <Badge>incompleted</Badge>}</TableCell>
            <TableCell>
             <TodosActions userId={userId} todo={todo}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-center">{tododata.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
