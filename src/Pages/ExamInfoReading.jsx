import ExamInfoReadingHeader from "../Components/ExamInfo/ExamInfoReading/ExamInfoReadingHeader";
import ExamInfoReadingTable from "../Components/ExamInfo/ExamInfoReading/ExamInfoReadingTable";

export default function ExamInfoReading() {
    return (
        <div className="Exam p-[15px]">
            <ExamInfoReadingHeader/>
            <ExamInfoReadingTable/>
        </div>
    )
}