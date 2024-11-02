type Props = {
  width: number;
  height: number;
};

const LineBreak = ({ width, height }: Props) => (
  <div
    style={{ width: `${width}px` }}
    className={`h-[${height}px] bg-gray-200`}
  />
);

export default LineBreak;
