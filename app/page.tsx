import SearchBox from "@/components/SearchBox";
import Navbar from "@/components/nav/Navbar";

export default function Home() {
  return (
    <div className="max-w-screen-sm mx-auto p-6 md:py-14 md:px-0 ">
      <Navbar />
      <SearchBox />
    </div>
  );
}
