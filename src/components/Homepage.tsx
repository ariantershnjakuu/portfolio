// import Arian from "../assets/profile.jpg";

import Resources from "./Resources";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="pt-16 block relative fade-in h-screen">
      <div className="archivo mt-52 w-[682px] text-[40px] text-left text-white font-normal">
        Arian is a front end developer who loves to build things for the web.
      </div>
      <img
        src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b91c9bcae89e57253d599a9_horizontal-line.svg"
        alt=""
        className="py-8"
      />
      <p className="w-[430px] text-[#868686] mb-4 text-lg relative nunito">
        I build web applications with a focus on performance and accessibility.
        Currently I'm working at{" "}
        <span className="text-orange-400">Gjirafa.Inc</span>
      </p>
      <div className="flex items-center gap-5">
        <Resources />
      </div>
      <img
        src="https://ucarecdn.com/4fd4cd98-fd3b-4fb9-aed8-150db8986f04/Screenshot%202024-01-31%20at%2018.41.25.png"
        alt=""
        className="-z-10 inline-block absolute top-28 bottom-0 -right-28 opacity-70"
        width={580}
      />
    </div>
  );
};

export default HomePage;
