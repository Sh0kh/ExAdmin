import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import 'react-quill/dist/quill.snow.css'; // или 'quill.bubble.css'

import SQP3GoodCreateModal from "./SQP3GoodCreateModal";

export default function SQP3Evil() {
    const [createModal, setCreateModal] = useState(false)

    return (
        <div className="">
            <div onClick={() => setCreateModal(true)} className="bg-MainColor flex items-center justify-between p-[20px] cursor-pointer rounded-[10px] mt-[20px]">
                <span className="text-[white]">
                    Salbiy tomoni yaratish
                </span>
                <div className="flex items-center gap-2">
                    {/* Edit Button */}
                    <button

                        className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"

                    >
                        <MdEdit fontSize={22} />
                    </button>
                    {/* Delete Button */}
                    <button
                        className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                    >
                        <MdDelete fontSize={22} />
                    </button>
                </div>
            </div>
            <SQP3GoodCreateModal isOpen={createModal} onClose={() => setCreateModal(false)} />
        </div>
    );
}
