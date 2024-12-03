import SpeakinHeader from "../Components/ExamCheck/Speaking/SpeakingHeader";
import SpeakingTable from "../Components/ExamCheck/Speaking/SpeakingTable";

export default function SpeakingCheck(){
    return(
        <div className="SpeakingCheck p-[15px]">
            <SpeakinHeader/>
            <SpeakingTable/>
            
        </div>
    )
}