import LineBreak from "@/components/LineBreak";
import FontSelector from "@/components/nav/FontSelector";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav>
      <header className="flex justify-between">
        <Logo />
        <div className="flex gap-4 md:gap-7 items-center justify-center">
          <FontSelector />
          <LineBreak width={1} height={32} />
          <DarkModeToggle />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
