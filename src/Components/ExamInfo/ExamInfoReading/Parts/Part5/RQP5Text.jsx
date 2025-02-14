import { useEffect, useState, useMemo } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export default function RQP5Text({ Edit, Delete, data }) {
    const [text, setText] = useState(null);
    const writingQuestion = useMemo(() => {
        return data?.find((question) => question.type === "writing") || null;
    }, [data]);

    useEffect(() => {
        setText(writingQuestion);
    }, [writingQuestion]);

    const processedQuestion = text?.question?.replace(/inputext/g, "_______");

    return (
        <>
            {text ? (
                <div className="mb-[30px]">
                    <div className="bg-MainColor rounded-[10px] p-[10px] mt-[30px] text-[white]">
                        <div className="flex items-center justify-between">
                            <h1 className="text-[20px]">Matn</h1>
                            <div className="flex items-center gap-[10px]">
                                <button
                                    onClick={() => Edit(text)}
                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                >
                                    <MdEdit fontSize={22} />
                                </button>
                                <button
                                    onClick={() => Delete(text.id)}
                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                >
                                    <MdDelete fontSize={22} />
                                </button>
                            </div>
                        </div>
                        <div
                            className="text-[18px] text-white mt-[10px]"
                            dangerouslySetInnerHTML={{ __html: processedQuestion }}
                        ></div>
                    </div>
                    <div>
                        <h1 className="text-center text-[25px] font-bold mt-[15px]">
                            Javoblar
                        </h1>
                        {text.answers && text.answers.length > 0 ? (
                            text.answers.map((i, index) => (
                                <div key={i.id} className="bg-MainColor rounded-[10px] cursor-pointer p-[10px] text-[white] mt-[15px]">
                                    <span>
                                        {index + 1}) {i.answer}
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
                <div className="w-full h-[404px] flex items-center justify-center">
                    <h1 className="font-bold text-[25px]">
                        Bo`sh
                    </h1>
                </div>
            )}
        </>
    );
}
