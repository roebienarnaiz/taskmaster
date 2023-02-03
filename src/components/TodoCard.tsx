import React from 'react';
import { Todo } from '../models';
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from 'react-icons/ai';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className='mt-4 flex w-11/12 rounded border border-zinc-400 bg-zinc-100 p-5 dark:bg-zinc-300 sm:w-11/12'>
      <span className='flex-1 border-none p-1 text-lg focus:outline-none'>{todo.todo}</span>
      <div className='flex'>
        <AiFillEdit className='ml-2  cursor-pointer text-2xl' />
        <AiFillDelete className='ml-2  cursor-pointer text-2xl' />
        <AiOutlineCheck className='ml-2 cursor-pointer text-2xl' />
      </div>
    </form>
  );
};

export default TodoCard;
