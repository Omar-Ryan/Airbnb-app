import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <header className=" sticky top-0 z-50 py-5 shadow-md bg-white">
      <div className="container grid grid-cols-3">
        <Link href={"/"} className="relative flex items-center h-10">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="img-logo"
            fill
            className="object-contain object-left"
          />
        </Link>
        <SearchBar />
        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
