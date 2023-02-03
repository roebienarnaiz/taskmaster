import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const Navbar = (props: any) => {
  return (
    <nav className='flex justify-between border-y-2 bg-slate-100 py-5 px-5 font-mono dark:border-zinc-600 dark:bg-zinc-800 sm:px-10 md:px-20 lg:px-40'>
      <h1 className='cursor-default text-xl font-bold text-zinc-900 dark:text-white'>RB</h1>
      <div className='flex items-center'>
        <div className='flex justify-center'>
          <span className='p-1 font-semibold dark:text-zinc-200'>{props.darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          <button
            onClick={props.toggleDarkMode}
            className='mx-2 cursor-pointer rounded-lg p-2 text-lg text-zinc-400 transition duration-200 hover:bg-zinc-200 focus:outline-none focus:ring-4 focus:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:ring-zinc-600'>
            {props.darkMode ? <BsSunFill className='dark:text-zinc-100 ' /> : <BsMoonFill />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
