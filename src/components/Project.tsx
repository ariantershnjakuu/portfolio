import React from "react";

type ProjectType = {
  bgImg: string;
  logoImg: string;
  color: string;
  hover: string;
  position: string;
  projectDescription: string;
  technologies: string;
  isShow: boolean;
  button: string;
  href: string;
};

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${project.bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[690px] mt-8 overflow-hidden opacity-80"
    >
      <div className="w-[400px] ml-20 top-16 relative flex flex-col">
        <img
          alt=""
          src={project.logoImg}
          width="120"
          className="mb-20 brightness-0"
        />
        <span
          className={`uppercase text-lg tracking-widest teko text-${project.color}`}
        >
          {project.position}
        </span>
        <span
          className={`text-2xl font-medium teko uppercase my-6 text-${project.color}`}
        >
          {project.projectDescription}
        </span>
        <span className={`text-${project.color}`}>{project.technologies}</span>
        {project.isShow && (
          <a
            rel="noreferrer"
            href={project.href}
            target="_blank"
            style={{
              border: `2px solid ${project.color}`,
              color: `${project.color}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = `${project.hover}`;
              e.currentTarget.style.backgroundColor = `${project.color}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = `${project.color}`;
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            className={`mt-6 uppercase font-semibold px-6 py-4
         self-start transition-all duration-200 ease-in-out`}
          >
            {project.button}
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
