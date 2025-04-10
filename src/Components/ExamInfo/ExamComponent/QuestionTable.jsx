import React, { useState, useMemo } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export default function QuestionTable({ Edit, Delete, data }) {
    const [open, setOpen] = useState(false);

    // Фильтруем вопросы, исключая те, у которых type === "writing"
    const filteredData = useMemo(() => {
        return data?.filter((question) => question.type !== "writing") || [];
    }, [data]);

    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="flex items-start justify-start gap-[15px] flex-col">
            {filteredData.map((question, index) => (
                <Accordion key={question.id} open={open === index} className="rounded-[10px]">
                    <AccordionHeader
                        onClick={() => handleToggle(index)}
                        className="bg-MainColor p-4 rounded-[10px] cursor-pointer"
                    >
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-white">Question {index + 1}</h1>
                            <div className="flex items-center gap-2">
                                <button
                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                    onClick={(e) => { e.stopPropagation(); Edit(question); }}
                                >
                                    <MdEdit fontSize={22} />
                                </button>
                                <button
                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                    onClick={(e) => { e.stopPropagation(); Delete(question?.id); }}
                                >
                                    <MdDelete fontSize={22} />
                                </button>
                            </div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody className="bg-MainColor text-white p-4 rounded-[10px]">
                        <div>
                            {/* Рендерим текст вопроса */}
                            <h2>{question.question}</h2>
                            <div className="flex items-start gap-[10px] flex-col mt-[10px]">
                                {/* Рендеринг ответов */}
                                {question.answers.map((answerObj, i) => (
                                    <div className="w-full" key={answerObj.id}>
                                        <div
                                            className={`flex items-end gap-[5px] ${answerObj.is_correct ? "text-[#54f054]" : ""}`}
                                        >
                                            <span>{answerObj.answer}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AccordionBody>
                </Accordion>
            ))}
        </div>
    );
}
