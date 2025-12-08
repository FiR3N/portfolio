import React from "react";
import { projects } from "../../data/projects";
import cls from "./Projects.module.css";
import Button from "../UI/Button/Button";
import AnimatedSection from "../UI/AnimatedSection/AnimatedSection";

const Projects: React.FC = () => {
  return (
    <AnimatedSection
      id="projects"
      className={cls.projects}
      delay={200}
      threshold={0.1}
      animation="slide-up"
    >
      <div className="container">
        <h2 className="section-title">Мои проекты</h2>
        <div className={cls.projectsContent}>
          {projects.map((project) => (
            <div key={project.id} className={cls.projectCard}>
              <div className={cls.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={cls.projectCardContent}>
                <h3 className={cls.projectTitle}>{project.title}</h3>
                <p className={cls.projectDescription}>{project.description}</p>
                <div className={cls.projectTechnologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={cls.projectLinks}>
                  {project.githubUrls.map((githubUrl) => (
                    <Button
                      href={githubUrl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={githubUrl.id}
                    >
                      {githubUrl.name ? `Github(${githubUrl.name})` : "Github"}
                    </Button>
                  ))}

                  {project.demoUrl && (
                    <Button
                      type="secondary"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Демо
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
