import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { ThemeSwitcher } from "../..";
import { NavLink } from "../nav-link";

interface MainHeaderProps {
  toggleDrawer: () => void;
}

const MainHeader = ({ toggleDrawer }: MainHeaderProps) => {
  // hooks
  const router = useRouter();

  return (
    <header className="background duration-200 w-full sticky top-0 lg:px-0 px-5">
      <nav className="container flex justify-between items-center py-3 ">
        <div>
          <Link href="/home" className="lg:block hidden text-medium font-[600]">
            Abdullah Mia
          </Link>
          <button
            onClick={toggleDrawer}
            className="lg:hidden block dark:text-gray-300"
          >
            <BiMenu size={20} />
          </button>
        </div>
        <div className="flex items-center justify-center">
          {/* Menus */}
          <div className="lg:block hidden pr-6 menu space-x-6">
            <div className="flex items-center gap-8">
              <Link href="/home">Home</Link>
              <NavLink href="/project">Projects</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 lg:border-l pl-5">
            <ThemeSwitcher />
            <button className="lg:block hidden large-btn px-7 py-2 rounded">
              Follow
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
