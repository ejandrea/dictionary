import SearchBox from "@/components/search/SearchBox";
import Navbar from "@/components/nav/Navbar";

export default function Home() {
  return (
    <div
      className="max-w-screen-sm mx-auto p-6 md:py-14 md:px-0"
      aria-label="Home page">
      <Navbar />
      <SearchBox />
    </div>
  );
}
