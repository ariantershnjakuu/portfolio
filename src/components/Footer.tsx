import Resources from "./Resources";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-[440px] px-20 flex items-center">
      <div className="flex flex-col h-full justify-end w-full">
        <div className="flex items-center gap-44 w-[600px]">
          <div className="flex flex-col min-h-56">
            <span className="uppercase text-5xl font-bold text-white my-6 teko">
              work
            </span>
            <span className="text-base text-[#8a8a8a] font-normal nunito">
              Web applicatons
            </span>
            <span className="text-base text-[#8a8a8a] font-normal mt-6 nunito">
              Mobile applications
            </span>
            <span className="text-base text-[#8a8a8a] font-normal mt-6 nunito">
              UI/UX Design
            </span>
          </div>
          <div className="flex flex-col min-h-56">
            <span className="uppercase text-5xl font-bold text-white my-6 teko">
              about
            </span>
            <a
              href="https://www.linkedin.com/in/arian-tershnjaku/"
              className="text-base text-[#8a8a8a] font-normal nunito"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/ariantershnjakuu"
              className="text-base text-[#8a8a8a] font-normal mt-6 nunito"
            >
              Github
            </a>
          </div>
        </div>
        <div className="border-t-2 border-[#444] w-full mt-12 flex items-center"></div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#8a8a8a] font-normal nunito py-6">
            ©{currentYear} Arian Tershnjaku. All Rights Reserved.
          </span>
          <div className="flex items-center gap-4">
            <Resources />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
