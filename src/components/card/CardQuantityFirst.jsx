import { BiUserCircle } from "react-icons/bi";

const CardQuantityFirst = ({ num, title }) => {
  return (
    <div className="bg-[#FFFFFF] w-full flex flex-col justify-center items-center lg:p-9 p-5 md:p-6 rounded-xl">
      <div className="bg-[#022B3A] p-5 rounded-lg">
        <BiUserCircle className="text-white scale-[1.9]" />
      </div>
      <div className="mt-8 text-center">
        <h3 className="font-bold text-lg">{num}</h3>
        <h4 className="text-sm">{title}</h4>
      </div>
    </div>
  );
};

export default CardQuantityFirst;
