import WritingHeader from "../Components/ExamCheck/Writing/WritingHeader";
import WritingTable from "../Components/ExamCheck/Writing/WritingTable";

export default function WritingCheck(){
    return(
        <div className="WritingCheck p-[15px]">
            <WritingHeader/>
            <WritingTable/>
        </div>
    )
}