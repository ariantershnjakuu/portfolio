interface FadeDownProps {}

const FadeDown: React.FC<FadeDownProps> = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-2 pb-20">
      <img
        src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a118854430d1d59670a_x.svg"
        alt=""
        data-aos="flip-up"
      />
      <img
        src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a51b07f22c423841fab_vertical-line.svg"
        alt=""
        data-aos="fade-down"
        data-aos-duration="500"
      />
    </div>
  );
};

export default FadeDown;
