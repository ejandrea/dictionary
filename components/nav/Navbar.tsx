import LineBreak from "@/components/LineBreak";
import FontSelector from "@/components/nav/FontSelector";
import DarkButtonToggle from "./DarkButtonToggle";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav>
      <header className="flex justify-between">
        <Logo />
        <div className="flex gap-4 md:gap-7 items-center justify-center">
          <FontSelector />
          <LineBreak width={1} height={32} />
          <DarkButtonToggle />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
