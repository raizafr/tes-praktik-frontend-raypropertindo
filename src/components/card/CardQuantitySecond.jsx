import { BiUserCircle } from "react-icons/bi";

const CardQuantitySecond = ({ num, title }) => {
  return (
    <div className="bg-[#FFFFFF] flex justify-between items-center px-2 rounded-lg py-2">
      <div className="bg-[#022B3A] p-3 rounded-lg">
        <BiUserCircle className="text-white scale-125" />
      </div>
      <div>
        <p className="text-xs">{title}</p>
        <p className="text-end font-bold">{num}</p>
      </div>
    </div>
  );
};

export default CardQuantitySecond;
