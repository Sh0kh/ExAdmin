import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";

export default function QuestionText({ Edit, data }) {
    const [text, setText] = useState(data);

    useEffect(() => {
        setText(data);
    }, [data]);




    return (
        <>
            {data ? (
                <div className="mb-[30px]">
                    <div className="bg-MainColor rounded-[10px] p-[10px] text-[white]">
                        <div className="flex items-center justify-between">
                            <h1 className="text-[20px]">Savol matini</h1>
                            <div className="flex items-center gap-[10px]">
                                <button
                                    onClick={Edit}
                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                >
                                    <MdEdit fontSize={22} />
                                </button>
                            </div>
                        </div>
                        {/* Rendering the HTML content from text.question */}
                        <div
                            className="text-[18px] text-white mt-[10px]"
                            dangerouslySetInnerHTML={{ __html: text }}
                        ></div>
                    </div>

                </div>
            ) : (
                <div className="w-full h-[404px] flex items-center justify-center ">
                    <h1 className="font-bold text-[25px]">
                        Bo`sh
                    </h1>
                </div>
            )}
        </>
    );
}
