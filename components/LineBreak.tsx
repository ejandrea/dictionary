type Props = {
  width?: number;
  height: number;
};

const LineBreak = ({ width, height }: Props) => (
  <div
    style={{
      height: `${height}px`,
      width: width ? `${width}px` : "100%",
    }}
    className="bg-gray-200"
  />
);

export default LineBreak;
