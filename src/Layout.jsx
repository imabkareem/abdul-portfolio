import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from 'react';


const Layout = () => {

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );


  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

   useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);


  return (
   <div className="min-h-screen bg-cover bg-center bg-white">
  <div className="min-h-screen  dark:bg-gray-800">
     
      <Navbar
        
        toggleNavDrawer={toggleNavDrawer}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
      <Sidebar
        navDrawerOpen={navDrawerOpen}
        setNavDrawerOpen={setNavDrawerOpen}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />

    <main  className="pt-[72px]">
      <Outlet />
    </main>
    <Footer className="" />
  </div>
</div>

  );
};

export default Layout;
