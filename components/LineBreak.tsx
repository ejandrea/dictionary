type Props = {
  width?: number;
  height: number;
};

const LineBreak = ({ width, height }: Props) => (
  <hr
    style={{
      height: `${height}px`,
      width: width ? `${width}px` : "100%",
    }}
    role="separator"
    className="bg-gray-200"
  />
);

export default LineBreak;
