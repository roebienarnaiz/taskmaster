import React, { useState } from 'react';
import Navbar from './Navbar';
import ToolBar from './ToolBar';

const Layout = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
      <div className={`font mono ${darkMode ? 'dark' : ' '}`}>
        <ToolBar />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
