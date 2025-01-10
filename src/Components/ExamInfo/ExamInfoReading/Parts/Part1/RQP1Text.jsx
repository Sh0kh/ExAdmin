import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function RQP1Text({ Edit, Delete, data }) {
    const [text, setText] = useState(data[0]);


    useEffect(() => {
        setText(data[0]);
    }, [data]);


    const processedQuestion = text?.question?.replace(/{inputext}/g, "_______");


    return (
        <>
            {data[0] ? (
                <div>
                    <div className="bg-MainColor rounded-[10px] p-[10px] text-[white]">
                        <div className="flex items-center justify-between">
                            <h1 className="text-[20px]">Matn</h1>
                            <div className="flex items-center gap-[10px]">
                                <button
                                    onClick={() => Edit(data[0])}
                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                >
                                    <MdEdit fontSize={22} />
                                </button>
                                {/* Delete Button */}
                                <button
                                    onClick={() => Delete(data[0]?.id)}
                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                >
                                    <MdDelete fontSize={22} />
                                </button>
                            </div>
                        </div>
                        {/* Rendering the HTML content from text.question */}
                        <div
                            className="text-[18px] text-white mt-[10px]"
                            dangerouslySetInnerHTML={{ __html: processedQuestion }}
                        ></div>
                    </div>
                    <div>
                        <h1 className="text-center text-[25px] font-bold mt-[15px]">
                            Javoblar
                        </h1>
                        {data[0]?.answers && data[0]?.answers?.length > 0 ? (
                            data[0]?.answers?.map((i, index) => (
                                <div className="bg-MainColor rounded-[10px] cursor-pointer p-[10px] text-[white] mt-[15px]">
                                    <span>
                                        {index + 1}) {i?.answer}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <div className="w-full h-[200px] flex items-center justify-center">
                                <h1 className="font-bold text-[25px]">
                                    Bo`sh
                                </h1>
                            </div>
                        )}
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
