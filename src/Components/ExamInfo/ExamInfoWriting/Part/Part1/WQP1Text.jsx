

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function WQP1Text({ editModal, deleteModal }) {


    return (
        <div className="border-MainColor border-[2px] rounded-[10px] p-[10px]">
            <div className="flex items-center justify-between">
                <h1 className="text-[20px]">
                    Matn
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button
                        onClick={editModal}
                        className="p-2 border-2 border-MainColor text-white bg-MainColor rounded-[5px] hover:bg-transparent hover:text-MainColor"
                    >
                        <MdEdit fontSize={22} />
                    </button>
                    {/* Delete Button */}
                    <button
                        onClick={deleteModal}
                        className="p-2 border-2 border-MainColor text-white bg-MainColor rounded-[5px] hover:bg-transparent hover:text-MainColor"
                    >
                        <MdDelete fontSize={22} />
                    </button>
                </div>
            </div>
            <div>
                <p className="text-[18px] mt-[10px] p-[10px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, temporibus consequatur tempore distinctio molestias, delectus ipsum placeat illo maiores perspiciatis voluptatum, soluta ducimus. Et accusantium quisquam iusto repudiandae, debitis alias amet cumque a provident iste? Dolore ullam quo, repudiandae, autem, nobis ducimus accusamus commodi recusandae non iste ex suscipit. Doloribus consectetur error, vitae provident non dignissimos nostrum pariatur veritatis saepe sint consequatur! Quibusdam ducimus, eum quia harum distinctio labore saepe iste debitis ut nam cupiditate, in beatae ipsa deleniti vitae dicta reiciendis maxime eligendi aliquam tempora dolorem earum soluta. Impedit magnam cum nobis quos? Magnam labore vero itaque optio distinctio?
                </p>
            </div>
        </div>
    )
}