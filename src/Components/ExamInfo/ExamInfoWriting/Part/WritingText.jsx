import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function WritingText({ editModal, deleteModal, data }) {
    return (
        <div className="border-MainColor border-[2px] rounded-[10px] p-[10px]">
            <div className="flex items-center justify-between">
                <h1 className="text-[20px]">Matn</h1>
                <div className="flex items-center gap-[10px]">
                    <button
                        onClick={editModal}
                        className="p-2 border-2 border-MainColor text-white bg-MainColor rounded-[5px] hover:bg-transparent hover:text-MainColor"
                    >
                        <MdEdit fontSize={22} />
                    </button>
                </div>
            </div>
            <div className="text-[18px] mt-[10px] p-[10px]">
                {/* Отображение HTML-текста из data */}
                <div dangerouslySetInnerHTML={{ __html: data }} />
            </div>
        </div>
    );
}
