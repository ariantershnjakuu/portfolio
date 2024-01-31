declare module "*.svg, *.png, *.jpg, *.jpeg, *.gif, *.bmp, *.tiff" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
