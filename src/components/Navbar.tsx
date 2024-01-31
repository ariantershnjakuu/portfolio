import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className="teko font-normal text-white my-6 uppercase">
        Arian Tershnjaku
      </Link>
    </div>
  );
};

export default Navbar;
