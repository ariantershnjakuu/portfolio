import "../index.css";
import React from "react";
import FadeDown from "./FadeDown";

interface BrandsProps {}

const certified = [
  {
    src: "https://ariani-portofolio.netlify.app/img/logos/logoblack.svg",
    width: 100,
  },
  {
    src: "https://ariani-portofolio.netlify.app/img/logos/business-insider.png",
    width: 45,
  },
  {
    src: "https://ariani-portofolio.netlify.app/img/logos/ICK.png",
    width: 100,
  },
  {
    src: "https://ariani-portofolio.netlify.app/img/logos/BONEVET.png",
    width: 130,
  },
  {
    src: "https://ariani-portofolio.netlify.app/img/logos/udemy.png",
    width: 120,
  },
];

const Brands: React.FC<BrandsProps> = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <FadeDown />
      <div
        className="flex flex-col items-center justify-center mb-20 "
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <span className="text-gray-500 text-lg text-center mb-10 uppercase font-bold">
          Certifed from
        </span>
        <div className="flex justify-around items-center max-w-5xl w-[1024px]">
          {certified.map(({ src, width }) => (
            <img
              src={src}
              alt=""
              width={width}
              className="opacity-50 brightness-200"
            />
          ))}
        </div>
      </div>
      <FadeDown />
    </div>
  );
};

export default Brands;
