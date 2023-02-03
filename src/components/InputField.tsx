import React from 'react';

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form onSubmit={handleAdd} className='relative flex w-11/12 items-center'>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type='input'
        placeholder='Create a Task'
        className='w-full rounded-full border-none py-5 px-7 text-2xl shadow-[inset_0_0_5px] shadow-black  focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] focus:outline-none dark:bg-zinc-400 dark:text-zinc-200 dark:placeholder-zinc-200'
      />
      <button
        type='submit'
        className='absolute right-0 m-3 h-12 w-12 rounded-full border-none bg-zinc-100 text-lg text-zinc-900 shadow-[0_0_5px] shadow-black transition duration-200 hover:scale-105 hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-zinc-200 active:scale-90 dark:bg-zinc-800 dark:text-zinc-100'>
        GO
      </button>
    </form>
  );
};

export default InputField;
