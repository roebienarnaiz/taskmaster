import React from 'react';
import { Todo } from '../models';
import TodoCard from './TodoCard';

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='flex w-[90%] flex-wrap justify-evenly'>
      {todos.map((todo: any) => {
        return <TodoCard key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />;
      })}
    </div>
  );
};

export default TodoList;
