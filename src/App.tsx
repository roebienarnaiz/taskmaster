import React, { useState } from 'react';
import InputField from './components/InputField';
import { Todo } from './models';
import './index.css';
import TodoList from './components/TodoList';
import Layout from './components/Layout';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //Prevent blank task submission

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]); //keep the existing todos then add another
      setTodo(''); //Clear the input field
    }
  };
  return (
    <Layout>
      <div className=' flex h-screen w-screen flex-col items-center  bg-zinc-100 dark:bg-zinc-900 '>
        <h1 className='z-0 my-8 items-center text-center text-4xl uppercase text-zinc-900 dark:text-zinc-100'>Task Master</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </Layout>
  );
};

export default App;
