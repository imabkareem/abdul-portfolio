import { Link } from 'react-router-dom';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function Navbar({ toggleNavDrawer, toggleTheme, isDark }) {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className=" fixed top-3 left-0 right-0 z-50 rounded-lg w-full border-2 border-gray-500 dark:border-gray-50 ">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full  overflow-hidden border-2 border-yellow-500 shadow-md">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.jQjcnh8WJ9snIJTxrtr5MQHaHa"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            IAmAb<span className="text-yellow-600">KAreem</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center font-semibold space-x-6">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white uppercase text-sm"
            >
              #{item.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="text-xl">
            {isDark ? <MdLightMode className='text-white' /> : <MdDarkMode  />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavDrawer} className="md:hidden">
          <HiBars3BottomRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
