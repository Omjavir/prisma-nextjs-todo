import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";
import React from "react";

function getTodods() {
  return prisma.todo.findMany();
}


export default async function Home() {
  const todos = await getTodods();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todo Application with Prisma</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
