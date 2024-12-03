import ReytingHeader from "../Components/Reyting/ReytingHeader";
import ReytingTable from "../Components/Reyting/ReytingTable";

export default function Reyting(){
    return(
        <div className="Reyting p-[15px]">
            <ReytingHeader/>
            <ReytingTable/>
        </div>
    )
}