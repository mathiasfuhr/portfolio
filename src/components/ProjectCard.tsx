import React from 'react';
import { Project } from '../types/projectType';

interface ProjectCardProps extends Project {
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, githubLink, liveLink, onClick }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300" onClick={onClick}>
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          GitHub
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
