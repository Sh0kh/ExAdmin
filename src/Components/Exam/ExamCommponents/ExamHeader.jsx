export default function ExamHeader({isOpen}) {
    return (
        <div className="Header__wrapper">
            <h1 className="text-MainColor text-[32px] font-[700]">
                Imtihon
            </h1>
            <button onClick={isOpen} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                Yaratish
            </button>
        </div>
    )
}