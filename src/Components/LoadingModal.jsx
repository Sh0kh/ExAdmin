
import ReactLoading from "react-loading";



export default function LoadingModal({ isOpen }) {



    return (
        <>
            <div className={`Modal ${isOpen ? "open" : ""}`} >
                <div className={`ModalContent ${isOpen ? "open" : ""}`} >
                    <div className='p-[30px]'>
                        <ReactLoading className="mx-auto" type="spinningBubbles" color="#000" height={100} width={100} />
                        <h2 className="text-center mt-[30px] text-[20px]">
                            Loading please wait
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}