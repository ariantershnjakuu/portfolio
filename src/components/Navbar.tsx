import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-center">
      <span className="teko font-normal text-white my-6 uppercase">
        Arian Tershnjaku
      </span>
    </div>
  );
};

export default Navbar;
