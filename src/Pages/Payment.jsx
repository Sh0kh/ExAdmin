import PaymentHeader from "../Components/Payment/PaymentHeader";
import PaymentTable from "../Components/Payment/PaymentTable";

export default function Payment(){
    return(
        <div className="Payment p-[15px]">
            <PaymentHeader/>
            <PaymentTable/>
        </div>
    )
}