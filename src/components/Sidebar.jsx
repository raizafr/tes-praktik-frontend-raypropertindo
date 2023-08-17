import companyLogo from "../assets/company-logo.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BiPencil } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useSidebarContext } from "../context/SidebarContext";
import { AiOutlineClose } from "react-icons/ai";

export default function Sidebar() {
  const location = useLocation().pathname;

  const { isSidebarVisible, toggleSidebar } = useSidebarContext();
  return (
    <aside
      className={`bg-[#022B3A] text-white lg:w-[300px] pt-7 min-h-screen lg:block fixed lg:static z-10 ${
        isSidebarVisible ? "" : "hidden"
      }`}
    >
      <div className="space-y-1.5 px-7">
        <div className="flex justify-between">
          <img src={companyLogo} alt="" className="w-14" />
          <div className="lg:hidden mt-0.5">
            <button onClick={toggleSidebar}>
              <AiOutlineClose className="scale-150 border" />
            </button>
          </div>
        </div>
        <h1 className="text-sm">Yoseph Duna</h1>
        <h2 className="text-xs opacity-50">Author</h2>
      </div>
      <div className="text-sm mt-10">
        <div className="font-semibold">
          <div
            className={`py-3 border-l-[3px] border-transparent ${
              location == "/" ? "active-side" : ""
            }`}
          >
            <Link to={"/"} className="flex items-center gap-2 px-7">
              <GoHome className="scale-110" />
              <span>Dashboard</span>
            </Link>
          </div>
          <div
            className={`py-3 border-l-[3px] border-transparent ${
              location == "/user-management" ? "active-side" : ""
            }`}
          >
            <Link
              to={"/user-management"}
              className="flex items-center gap-2 px-7"
            >
              <AiOutlineUser className="scale-110" />
              <span>User Management</span>
            </Link>
          </div>
          <div
            className={`py-3 border-l-[3px] border-transparent ${
              location == "/news/add-news" ? "active-side" : ""
            }`}
          >
            <Link
              to={"/news/add-news"}
              className="flex items-center gap-2 px-7"
            >
              <BiPencil className="scale-110" />
              <span>News</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
