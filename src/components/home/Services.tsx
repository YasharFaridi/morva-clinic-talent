import { FaFootball } from "react-icons/fa6";
import { HiCpuChip } from "react-icons/hi2";
import { PiPlantBold } from "react-icons/pi";
import { FaPerson } from "react-icons/fa6";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center mx-8 my-12 md:p-6">
      <div className="text-center">
        <h1 className="my-4 text-xl font-bold md:text-3xl">
          خدمات دپارتمان ها
        </h1>
        <p className="text-sm lg:text-lg">
          موسسه مروا شامل 4 دپارتمان است که هر کدام خدمات ویژه ای برای آینده شما
          دارند
        </p>
      </div>
      <div className="flex justify-center px-6 py-12 my-6 rounded-full bg-primary text-base-100">
        <div className="grid w-full grid-cols-1 gap-16 md:gap-8 lg:grid-cols-4 md:grid-cols-2 place-items-center">
          <div className="flex flex-col items-center gap-2 rounded-full">
            <FaFootball size={25} />
            <p className="font-bold">ورزش و تندرستی</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-full">
            <HiCpuChip size={25} />
            <p className="font-bold">فناوری و تکنولوژی</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-full">
            <PiPlantBold size={25} />
            <p className="font-bold">توسعه سازمانی</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-full">
            <FaPerson size={25} />
            <p className="font-bold">رشد فردی و استعداد یابی</p>
          </div>
        </div>
      </div>
    </div>
  );
}
