interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="h-[520px] px-20 flex items-center">
      <div className="flex items-center gap-44 w-[600px]">
        <div className="flex flex-col min-h-56">
          <span className="uppercase text-5xl font-bold text-white my-6 teko">
            work
          </span>
          <a href="" className="text-base text-gray-500 font-normal">
            Web applicatons
          </a>
          <a href="" className="text-base text-gray-500 font-normal mt-6">
            Mobile applications
          </a>
          <a href="" className="text-base text-gray-500 font-normal mt-6">
            UI/UX Design
          </a>
        </div>
        <div className="flex flex-col min-h-56">
          <span className="uppercase text-5xl font-bold text-white my-6 teko">
            about
          </span>
          <a href="" className="text-base text-gray-500 font-normal">
            Linkedin
          </a>
          <a href="" className="text-base text-gray-500 font-normal mt-6">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
