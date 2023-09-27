type TodoItemProps = {
  id: string;
  title: string;
};

export default function TodoItem({ id, title }: TodoItemProps) {
  return (
      <li className="flex gap-1 items-center">
        <label
          htmlFor={id}
          className="cursor-pointer text-xl peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </li>
  );
}
