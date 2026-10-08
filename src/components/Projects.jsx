import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Sparkles, 
  Layers,
  Code2,
  Bot,
  CheckSquare
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const getProjectIcon = (id) => {
    if (id.includes('ai')) return Bot;
    if (id.includes('productivity')) return CheckSquare;
    return Code2;
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-100/40 dark:bg-slate-950/30 border-t border-slate-200/60 dark:border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Practical projects built to reinforce modern web technologies, AI workflows, and digital productivity solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const ProjectIcon = getProjectIcon(project.id);

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-card border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-lg hover:shadow-2xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative Top Banner */}
                <div className="relative p-6 sm:p-7 pb-5 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-slate-800/50 dark:to-transparent border-b border-slate-100 dark:border-slate-800/60">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
                      <ProjectIcon className="w-6 h-6" />
                    </div>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      <Sparkles className="w-3 h-3" />
                      <span>{project.badge || 'Project'}</span>
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {project.tagline}
                  </div>
                </div>

                {/* Description & Content */}
                <div className="p-6 sm:p-7 pt-4 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technologies Used Badges */}
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Technologies Used</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/20 active:scale-95 transition-all duration-200"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
