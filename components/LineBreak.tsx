type Props = {
  width: number;
  height: number;
};

const LineBreak = ({ width, height }: Props) => (
  <div className={`w-[${width}px] h-[${height}px] bg-gray-200`} />
);

export default LineBreak;
