interface ResourcesProps {}

const resources = [
  {
    linkHref: "https://www.linkedin.com/in/arian-tershnjaku/",
    linkSrc:
      "https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b57e4a86a841038b8bc0af7_linkedin-3-xxl%20copy.png",
    width: 24,
  },
  {
    linkHref: "https://github.com/ariantershnjakuu",
    linkSrc:
      "https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png",
    width: 28,
  },
];

const Resources: React.FC<ResourcesProps> = () => {
  return (
    <>
      {resources.map(({ linkHref, linkSrc, width }) => (
        <a href={linkHref} rel="noreferrer">
          <img src={linkSrc} alt="" className="" width={width} />
        </a>
      ))}
    </>
  );
};

export default Resources;
