import { PiListBold } from "react-icons/pi";
import { RiShutDownLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useSidebarContext } from "../context/SidebarContext";

export default function Topbar() {
  const location = useLocation().pathname;
  const { toggleSidebar } = useSidebarContext();

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1 space-x-3 px-4">
        <button
          onClick={toggleSidebar}
          className="bg-[#022835] text-white py-2 px-2.5 rounded"
        >
          <PiListBold className="scale-[1.3]" />
        </button>
        <nav className="p-2">
          <ol className="list-reset flex text-[#005274] font-semibold text-sm md:text-base">
            <li>
              <a href="#" className="font-bold">
                Loan Market
              </a>
            </li>
            {location == "/" ? (
              <>
                <li className="mx-2">
                  <span className="">/</span>
                </li>
                <li>
                  <Link to={"/"}>Dashboard</Link>
                </li>
              </>
            ) : null}
            {location == "/user-management" ? (
              <>
                <li className="mx-2">
                  <span className="">/</span>
                </li>
                <li>
                  <Link to={"/user-management"}>User Management</Link>
                </li>
              </>
            ) : null}
            {location == "/news/add-news" ? (
              <>
                <li className="mx-2">
                  <span className="">/</span>
                </li>
                <li>
                  <Link className="font-bold">News</Link>
                </li>
                <li className="mx-2">
                  <span className="">/</span>
                </li>
                <li>
                  <Link to={"/add-news"}>Add News</Link>
                </li>
              </>
            ) : null}
          </ol>
        </nav>
      </div>
      <div className="flex-none">
        <div className="menu menu-horizontal px-4">
          <button className="font-semibold text-[#505050] flex items-center gap-2 hover:text-blue-400 duration-300">
            <RiShutDownLine className="scale-125" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
