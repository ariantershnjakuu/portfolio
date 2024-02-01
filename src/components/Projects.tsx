import Project from "./Project";
import { projects } from "./ProjectType";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="relative m-6 block top-20" data-aos="fade-up">
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
