import { PiExamFill } from "react-icons/pi";
import { SiTestcafe } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";




export default function Home() {
    return (
        <div className="Home p-[15px]">
            <div className="Home__wrapper">
                <div className="text-center flex items-center w-[300px] justify-between gap-[50px] shadow-md duration-500  cursor-pointer p-[15px]  rounded-[10px] border-[2px] border-MainColor hover:shadow-2xl">
                    <div className="">
                        <PiExamFill fontSize={50} />
                        <h3>
                            Imtihonlar soni
                        </h3>
                    </div>
                    <h3 className="text-[25px] font-bold">
                        O
                    </h3>
                </div>
                <div className="text-center flex w-[300px] items-center justify-between gap-[50px] shadow-md duration-500  cursor-pointer p-[15px]  rounded-[10px] border-[2px] border-MainColor hover:shadow-2xl">
                    <div className="">
                        <SiTestcafe fontSize={50} />
                        <h3>
                            Topshirilgan imtihonlar soni
                        </h3>
                    </div>
                    <h3 className="text-[25px] font-bold">
                        O
                    </h3>
                </div>
                <div className="text-center flex w-[300px] items-center justify-between gap-[50px] shadow-md duration-500  cursor-pointer p-[15px]  rounded-[10px] border-[2px] border-MainColor hover:shadow-2xl">
                    <div className="">
                        <FaPeopleGroup fontSize={50}/>
                        <h3>
                            Royhatan otganlar soni
                        </h3>
                    </div>
                    <h3 className="text-[25px] font-bold">
                        O
                    </h3>
                </div>
            </div>
        </div>
    )
}