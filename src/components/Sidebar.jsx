import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

function Sidebar({ navDrawerOpen, setNavDrawerOpen, toggleTheme, isDark }) {
  return (
    <div
      className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
        navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Menu
        </h2>
        <IoMdClose
          className="h-6 w-6 text-gray-700 dark:text-white cursor-pointer"
          onClick={() => setNavDrawerOpen(false)}
        />
      </div>
      <div className="p-4 space-y-4">
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            onClick={() => setNavDrawerOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        {/* Theme toggle in Sidebar */}
        <button
          onClick={() => {
            toggleTheme();
            setNavDrawerOpen(false);
          }}
          className="flex items-center gap-2 pt-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          {isDark ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
