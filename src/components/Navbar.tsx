// type Props = {
//   darkMode: boolean;
//   // toggleDarkMode: any;
//   setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
// };

import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const Navbar = (props: any) => {
  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode: any) => !prevMode);
  // };
  return (
    <nav className='flex justify-between border-b-2 bg-slate-100 py-5 px-5 font-sans dark:border-zinc-600 dark:bg-zinc-800 sm:px-10 md:px-20 lg:px-40'>
      <h1 className='cursor-default text-xl font-bold text-zinc-900 dark:text-white'>Welcome to my Portfolio</h1>
      <ul className='flex items-center'>
        <div className='flex justify-center'>
          <button
            onClick={props.toggleDarkMode}
            className='mr-4 cursor-pointer rounded-lg p-2 text-lg text-zinc-400 transition duration-200 hover:bg-zinc-200 focus:outline-none focus:ring-4 focus:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:ring-zinc-600'>
            {props.darkMode ? <BsSunFill className='dark:text-zinc-100 ' /> : <BsMoonFill />}
          </button>
        </div>
        <a
          className='ml-4  cursor-pointer rounded-lg bg-gradient-to-tr from-cyan-500 to-teal-500 px-4 py-2  text-white dark:bg-slate-600'
          href='https://www.linkedin.com/in/roebienarnaiz/'
          target='_blank'>
          Resume
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
