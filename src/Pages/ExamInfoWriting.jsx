import ExamInfoWritingHeader from "../Components/ExamInfo/ExamInfoWriting/ExamInfoWritingHeader";
import ExamInfoWritingTable from "../Components/ExamInfo/ExamInfoWriting/ExamInfoWritingTable";

export default function ExamInfoWritnig(){
    return(
        <div className="Exam p-[15px]">
            <ExamInfoWritingHeader/>
            <ExamInfoWritingTable/>
        </div>
    )
}