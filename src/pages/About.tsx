// src/pages/About.tsx
import React from 'react';
import Container from '../components/Container';
import { useTheme } from '../context/themeContext';
import SocialLinks from '../components/SocialLinks';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen py-12 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} flex justify-center items-center`}>
      <Container>
        <div className="flex flex-col justify-center items-center gap-12 mb-10 mt-12">
          {/* Texto */}
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-6">Sobre Mim</h1>
            <p className="text-lg mb-6 leading-relaxed">
              Olá! Eu sou Mathias Fuhr, um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Com experiência em React, TypeScript, Tailwind CSS e outras tecnologias modernas, estou sempre em busca de novos desafios para aprimorar minhas habilidades.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Minha jornada na programação começou há alguns anos, e desde então, tenho me dedicado a aprender e a implementar as melhores práticas em desenvolvimento web. Sou curioso por natureza e estou sempre atualizado com as tendências e inovações do setor.
            </p>
            <p className="text-lg leading-relaxed">
              Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Gran Faculdade e continuando meus estudos na B7Web, onde aprendo Node.js. Estou determinado a me tornar um desenvolvedor completo, capaz de criar soluções robustas e eficientes. Vamos construir algo incrível juntos!
            </p>
          </div>
        </div>
        <SocialLinks/>
      </Container>
    </div>
  );
};

export default About;
