interface ProjectsProps {}

const projects = [
  {
    bgImg:
      "https://ucarecdn.com/604f0175-27e9-4d33-8d98-55b71fb1673e/Screenshot%202024-01-31%20at%2020.34.51.png",
    logoImg:
      "https://flexgym-ks.com/wp-content/uploads/2023/11/FlexGym_4x-1536x562.webp",
    position: "Frontend Developer",
    projectDescription:
      "FlexGym is a gym located in Kosovo, I was responsible for building the website from scratch.",
    technologies: "React, TailwindCSS, Firebase",
  },
];
const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="relative m-6 block top-20" data-aos="fade-up">
      {projects.map(
        ({ bgImg, logoImg, position, projectDescription, technologies }) => (
          <div
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[690px] mt-8 overflow-hidden opacity-65"
          >
            <div className="w-[400px] ml-20 top-16 relative flex flex-col">
              <img
                src={logoImg}
                alt="logo"
                width="120"
                className="mb-36 brightness-0"
              />
              <span className="uppercase text-lg tracking-widest teko text-black">
                {position}
              </span>
              <span className="text-4xl font-medium teko uppercase my-6">
                {projectDescription}
              </span>
              <span>{technologies}</span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
