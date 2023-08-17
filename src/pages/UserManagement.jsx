import { AiOutlineUserAdd, AiOutlineSearch } from "react-icons/ai";
import { LuFilter } from "react-icons/lu";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import ItemList from "../components/ItemList";

export default function UserManagement() {
  return (
    <section className="bg-[#F5F6FA] px-3 md:px-5 lg:px-12 py-5">
      <div className="flex justify-end">
        <button className="flex items-center gap-1 text-sm bg-[#022B3A] text-white px-3 py-1.5 rounded-md">
          <AiOutlineUserAdd />
          <span>Add User</span>
        </button>
      </div>
      <div className="bg-[#ffffff] py-4 px-1 md:px-3 lg:px-10 mt-5 rounded-t-md">
        <div className="bg-[#F5F5F5] p-3 pl-5 flex rounded-md items-center gap-1">
          <label
            htmlFor="search"
            className="-mr-7 z-10 text-black text-opacity-50"
          >
            <AiOutlineSearch />
          </label>
          <input
            type="search"
            className="focus:outline-none w-full border px-8 rounded-lg py-1.5 text-sm"
            placeholder="Enter Keyword"
          />
          <button className="border px-1 text-sm py-1 flex items-center gap-1 font-semibold rounded-md border-black">
            <LuFilter />
            <span>Filters</span>
          </button>
        </div>
      </div>
      <div className="bg-[#ffffff] px-1 md:px-3 lg:px-10 rounded-b-md">
        <div>
          <ul className="text-sm font-semibold text-[#005274] text-opacity-70 flex gap-4 overflow-x-auto">
            <li className="font-bold border-b-2 border-[#005274] pb-2">
              Customer
            </li>
            <li className="">Author</li>
            <li className="">Super Admin</li>
            <li className="">BDE</li>
            <li className="">Advisor</li>
            <li className="">Admin Office</li>
            <li className="">Principal</li>
            <li className="">Principal LMI</li>
            <li className="">Bank Officer</li>
            <li className="">Bank Admin</li>
            <li className="">Bank Principal</li>
          </ul>
          <hr className="border-t border-black border-opacity-50 " />
        </div>
        <div className="overflow-x-auto py-5 rounded-md">
          <table className="table table-zebra border">
            <thead className="bg-[#022B3A] rounded-t-md text-white">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5 bg-[#ffffff] py-5 px-10 md:text-sm text-xs flex justify-between items-center rounded-md">
        <span className="opacity-50">1 - 15 of 60</span>
        <div className="flex gap-2">
          <span className="opacity-50">The page you'r on</span>
          <div className="flex gap-3">
            <select
              name=""
              id=""
              className="focus:outline-none border border-black rounded"
            >
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <div className="w-[1px] h-full border-l border-black"></div>
            <button className="border px-1 border-black border-opacity-60 rounded opacity-50">
              <IoMdArrowBack className="scale-[1.2]" />
            </button>
            <button className="border px-1 border-black rounded">
              <GrLinkNext />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
