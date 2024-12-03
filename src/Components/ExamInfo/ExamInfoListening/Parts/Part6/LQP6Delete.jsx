import { Button } from '@material-tailwind/react';

export default function LQP6Delete({ isOpen, onClose }) {

    return (
        <>
            <div className={`Modal ${isOpen ? "open" : ""}`} onClick={onClose} >
                <div className={`ModalContent ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()} >
                    <div className='p-[10px] pb-[30px]'>
                        <div className='flex items-center justify-end pt-[10px] pb-[20px]'>
                            <button onClick={onClose}>
                                <svg className='text-[#5E5C5A] text-[10px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                    <path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <h2 className='text-[#606266] text-center'>
                                Haqiqatan ham o'chirishni xohlaysizmi?
                            </h2>
                            <div className="flex items-center justify-center gap-[15px] w-[85%] mx-auto">
                                <Button
                                    fullWidth
                                    color="white"
                                    className="bg-transparent mt-[15px] transition duration-500 border-MainColor border-[2px] text-MainColor hover:bg-MainColor hover:text-white"
                                >
                                    Bekor qilish
                                </Button>
                                <Button
                                    fullWidth
                                    color="white"
                                    className="bg-MainColor mt-[15px] transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                                >
                                    Qabul qilish
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}