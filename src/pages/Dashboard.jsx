import {
  AiOutlineCloseCircle,
  AiOutlineArrowRight,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { FaFemale, FaMale } from "react-icons/fa";
import CardQuantitySecond from "../components/card/CardQuantitySecond";
import CardQuantityFirst from "../components/card/CardQuantityFirst";
import CardDataAnalytics from "../components/card/CardDataAnalytics";
import Progres from "../components/Progres";

export default function Dashboard() {
  return (
    <section className="px-3 md:px-5 lg:px-12 bg-[#F5F6FA] py-5">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#005274] font-bold text-xl">Dashboard</h1>
            <h2 className="text-[#505050] font-semibold text-sm">
              User Quantity
            </h2>
          </div>
          <button className="flex items-center gap-1 text-sm bg-[#022B3A] text-white px-3 py-1.5 rounded-md">
            <span>Go to CRM</span>
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap md:flex-nowrap gap-6">
          <div className="md:w-1/2 flex flex-row gap-6 justify-between w-full">
            <CardQuantityFirst num={"9823"} title={"User"} />
            <CardQuantityFirst num={"243"} title={"Borrower"} />
            <CardQuantityFirst num={"56"} title={"Adviser"} />
          </div>
          <div className="md:w-1/2 grid lg:grid-cols-3 grid-cols-2 w-full gap-6">
            <CardQuantitySecond num={"4"} title={"Admin Officer"} />
            <CardQuantitySecond num={"12"} title={"Principle"} />
            <CardQuantitySecond num={"6"} title={"Author"} />
            <CardQuantitySecond num={"3"} title={"Super Admin"} />
            <CardQuantitySecond num={"11"} title={"Principle LMI"} />
            <CardQuantitySecond num={"7"} title={"BDE"} />
            <CardQuantitySecond num={"124"} title={"Bank Officer"} />
            <CardQuantitySecond num={"210"} title={"Bank Admin"} />
            <CardQuantitySecond num={"36"} title={"Bank Principal"} />
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div>
          <h1 className="text-[#005274] font-bold text-xl">Data & Analytics</h1>
          <h2 className="text-[#505050] font-semibold text-sm">
            Show updates of Post
          </h2>
        </div>
        <div className="bg-[#FFFFFF] rounded-lg">
          <div className="w-full grid grid-cols-4 gap-4 py-5 px-3 rounded-xl mt-4">
            <CardDataAnalytics
              name={"Belum diproses"}
              num={"9,123"}
              colorClass={"border-[#3ABFF8]"}
            />
            <CardDataAnalytics
              name={"Sudah diproses"}
              num={"22,643"}
              colorClass={"border-[#F87272]"}
            />
            <CardDataAnalytics
              name={"Customer"}
              num={"78,623"}
              colorClass={"border-[#FBBD23]"}
            />
          </div>
          <hr />
          <div className="md:px-10 px-5 md:flex w-full gap-5 py-4">
            <div className="md:w-1/2">
              <Progres
                icon={<AiOutlineCloseCircle />}
                title={"Belum diproses"}
                persen={"43"}
                colorClass={"progress-info"}
              />
              <Progres
                icon={<AiOutlineCheckCircle />}
                title={"Sudah diproses"}
                persen={"37"}
                colorClass={"progress-error"}
              />
            </div>
            <div className="md:w-1/2">
              <Progres
                icon={<FaFemale />}
                title={"Pria"}
                persen={"43"}
                colorClass={"progress-warning"}
              />
              <Progres
                icon={<FaMale />}
                title={"Wanita"}
                persen={"37"}
                colorClass={"progress-warning"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
