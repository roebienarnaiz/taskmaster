const ToolBar: React.FC = () => {
  return (
    <div className='bg-zinc-200 p-2 text-center font-semibold dark:bg-zinc-900 dark:text-zinc-200'>
      <span className='items-center '>
        This site is created by Roe Bien Arnaiz visit my portfolio to see more!&nbsp;
        <a href='https://roebienarnaiz.vercel.app' target='_blank' className='text-blue-500'>
          Let's go!
        </a>
      </span>
    </div>
  );
};

export default ToolBar;
