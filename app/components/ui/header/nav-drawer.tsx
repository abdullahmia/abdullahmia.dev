import { BiHomeAlt, BiX } from "react-icons/bi";
import { RiComputerFill, RiContactsLine } from "react-icons/ri";
import { NavLink } from "../nav-link";

const NavDrower = ({
  isDrowerOpen,
  toggoleDrower,
}: {
  isDrowerOpen: Boolean;
  toggoleDrower: any;
}) => {
  return (
    <>
      {isDrowerOpen && (
        <div
          onClick={toggoleDrower}
          className="lg:hidden block h-screen w-full z-[100] absolute top-0 left-0 background transition duration-150"
        ></div>
      )}

      <div
        className="lg:hidden block z-[150] absolute top-0 h-screen w-[60%] background transition duration-150"
        style={{
          transform: `translateX(${isDrowerOpen ? "0" : "-100%"})`,
        }}
      >
        <button onClick={toggoleDrower} className="px-5 menu mt-5">
          <BiX size={20} />
        </button>

        {/* Drower Menu will be here... */}
        <div className="">
          {/* Menues */}
          <div className="py-4 px-5">
            <ul className="flex flex-col menu gap-4 text-sm">
              <NavLink href="/">
                <BiHomeAlt size={18} />
                Home
              </NavLink>
              <NavLink href="/">
                <RiComputerFill size={18} />
                Project
              </NavLink>
              <NavLink href="/">
                <RiContactsLine size={18} />
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavDrower;
