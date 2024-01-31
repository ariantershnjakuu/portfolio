import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-center fade-in">
      <span className="teko font-normal text-white my-6 uppercase text-3xl">
        Arian Tershnjaku
      </span>
    </div>
  );
};

export default Navbar;
