// src/components/MobileMenu.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavMenu from './NavMenu';
import { FaTimes } from 'react-icons/fa';

const MobileMenu: React.FC<{ isOpen: boolean; toggleMenu: () => void }> = ({ isOpen, toggleMenu }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-gray-900 text-white p-4 flex flex-col items-center justify-center "
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-700 transition-colors">
          <FaTimes size={24} />
        </button>
        <NavMenu />
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;
