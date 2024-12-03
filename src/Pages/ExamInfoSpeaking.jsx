import ExamInfoSpeakingHeader from "../Components/ExamInfo/ExamInfoSpeaking/ExamInfoSpeakingHeader";
import ExamInfoSpeakingTable from "../Components/ExamInfo/ExamInfoSpeaking/ExamInfoSpeakingTable";

export default function ExamInfoSpeaking(){
    return(
        <div className="Exam p-[15px]">
            <ExamInfoSpeakingHeader/>
            <ExamInfoSpeakingTable/>
        </div>
    )
}