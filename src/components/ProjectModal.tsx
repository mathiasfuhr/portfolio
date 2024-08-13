import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { Project } from '../types/projectType';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <FaTimes size={24} />
        </button>
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Live Demo
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
