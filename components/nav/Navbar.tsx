import LineBreak from "@/components/LineBreak";
import FontSelector from "@/components/nav/FontSelector";
import { Book } from "@/public/images/index";

const Navbar = () => {
  return (
    <nav>
      <header className="flex justify-between">
        <Book className="w-[28px] h-[32px] md:w-[32px] md:h-[36px]" />
        <div className="flex gap-4 md:gap-7 items-center justify-center">
          <FontSelector />
          <LineBreak width={1} height={32} />
          <p>hello</p>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
