import ExamInfoListeningAudio from "../Components/ExamInfo/ExamInfoListening/ExamInfoListeningAudio";
import ExamInfoListeningHeader from "../Components/ExamInfo/ExamInfoListening/ExamInfoListeningHeader";
import ExamInfoListeningTable from "../Components/ExamInfo/ExamInfoListening/ExamInfoListeningTable";

export default function ExamInfoLestinenig(){
    return(
        <div className="ExamInfoListening p-[15px]">
            <ExamInfoListeningHeader/>
            <ExamInfoListeningTable/>
            <ExamInfoListeningAudio/>
        </div>
    )
}