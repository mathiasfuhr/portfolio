// src/components/SocialLinks.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  className: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, className }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {icon}
  </motion.a>
);

const SocialLinks: React.FC = () => (
  <div className="flex space-x-4 justify-center md:justify-start">
    <SocialLink
      href="https://linkedin.com/in/seuperfil"
      icon={<FaLinkedin />}
      className="text-2xl md:text-3xl lg:text-4xl text-blue-600 hover:text-blue-800 transition-colors"
    />
    <SocialLink
      href="https://github.com/seuperfil"
      icon={<FaGithub />}
      className="text-2xl md:text-3xl lg:text-4xl text-gray-800 hover:text-gray-600 transition-colors"
    />
    <SocialLink
      href="https://twitter.com/seuperfil"
      icon={<FaTwitter />}
      className="text-2xl md:text-3xl lg:text-4xl text-blue-400 hover:text-blue-600 transition-colors"
    />
  </div>
);

export default SocialLinks;
