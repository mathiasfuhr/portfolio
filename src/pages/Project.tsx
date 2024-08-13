import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { Project } from '../types/projectType';
import { projects } from '../data/datProjects'; // Importa os dados dos projetos

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <div className="p-8 mb-10 mt-20">
      <h1 className="text-4xl font-bold mb-8">Meus Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            {...project}
            onClick={() => handleOpenModal(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default Projects;
