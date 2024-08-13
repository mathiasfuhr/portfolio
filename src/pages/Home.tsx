// src/pages/Home.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SocialLinks from '../components/SocialLinks';
import userImg from '../assets/bannerImg.png';

const Home: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 md:py-24 px-4 md:px-8 mb-10 mt-12">
        {/* Imagem */}
        <motion.img
          src={userImg}
          alt="Sua Foto"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-cover mb-8 md:mb-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        {/* Texto */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left space-y-6">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Bem-vindo! Eu sou Mathias Fuhr
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Desenvolvedor Front-End com experiência em React, TypeScript e Tailwind CSS.
          </motion.p>
          <SocialLinks />
        </div>
      </div>
    </Container>
  );
};

export default Home;
