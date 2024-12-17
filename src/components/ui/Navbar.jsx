import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { navLinks } from '../../constants';

export const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary/80 backdrop-blur-sm`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Your Name &nbsp;
              <span className="sm:block hidden">| Portfolio</span>
            </p>
          </a>
        </motion.div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="w-[28px] h-[28px] flex flex-col justify-around"
            onClick={() => setToggle(!toggle)}
          >
            <motion.span
              animate={{ rotate: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
              className="w-full h-[2px] bg-white block"
            />
            <motion.span
              animate={{ opacity: toggle ? 0 : 1 }}
              className="w-full h-[2px] bg-white block"
            />
            <motion.span
              animate={{ rotate: toggle ? -45 : 0, y: toggle ? -8 : 0 }}
              className="w-full h-[2px] bg-white block"
            />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95 }}
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};