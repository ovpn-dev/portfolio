import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 card-hover bg-white dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {project.featured && (
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {Object.keys(project.links).length > 0 && (
        <div className="flex gap-3 pt-3 border-t border-gray-200 dark:border-gray-800">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}
          {(project.links.appstore || project.links.playstore) && (
            <a
              href={project.links.appstore || project.links.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Smartphone size={16} />
              <span>App</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
