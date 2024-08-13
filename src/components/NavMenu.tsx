// src/components/NavMenu.tsx
import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/projects", text: "Projects" },
];

const NavLink: React.FC<{ to: string, text: string }> = ({ to, text }) => (
  <motion.a
    href={to}
    className="text-lg transition-transform duration-300 ease-in-out hover:scale-110"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.3 }}
  >
    {text}
  </motion.a>
);

const NavMenu: React.FC = () => (
  <nav className="flex flex-col md:flex-row gap-8 ">
    {links.map(link => (
      <NavLink key={link.to} to={link.to} text={link.text}/>
    ))}
  </nav>
);

export default NavMenu;
