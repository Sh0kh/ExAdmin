import { useSearchParams } from "react-router-dom";

export default function ExamInfoWritingHeader() {

    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");



    return (
        <div className="Header__wrapper">
            <h1 className="text-MainColor text-[32px] font-[700]">
                Imtihon ・ {name} ・ Writing
            </h1>
            {/* <button  className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                Yaratish
            </button> */}
        </div>
    )
}