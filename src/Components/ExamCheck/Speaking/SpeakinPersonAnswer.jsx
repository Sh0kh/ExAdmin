import React from 'react';
import ReactPlayer from 'react-player';

export default function SpeakingPersonAnswer() {
    return (
        <div className="">
            <div className="bg-MainColor rounded-[10px] p-[10px] text-[white]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[20px]">
                        Vazifa 1
                    </h1>
                </div>
                <div className="w-full bg-[white] h-[2px] mt-[10px] rounded-[50%]"></div>
                <div className="flex items-start flex-col mt-[10px]">
                    <span>Savol:</span>
                    <span>How are you ?</span>
                </div>
                <div className="mt-[10px]">
                    <ReactPlayer
                        url="path/to/your/audio/file.mp3" // Укажите путь к вашему аудиофайлу
                        controls={true} // Показывать элементы управления
                        width="100%" // Настройка ширины плеера
                        height="50px" // Настройка высоты плеера
                    />
                </div>
            </div>
            <div className="bg-MainColor mt-[20px] rounded-[10px] p-[10px] text-[white]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[20px]">
                        Vazifa 2
                    </h1>
                </div>
                <div className="w-full bg-[white] h-[2px] mt-[10px] rounded-[50%]"></div>
                <div className="flex items-start flex-col mt-[10px]">
                    <span>Savol:</span>
                    <span>How are you ?</span>
                </div>
                <div className="mt-[10px]">
                    <ReactPlayer
                        url="path/to/your/audio/file.mp3" // Укажите путь к вашему аудиофайлу
                        controls={true} // Показывать элементы управления
                        width="100%" // Настройка ширины плеера
                        height="50px" // Настройка высоты плеера
                    />
                </div>
            </div>
        </div>
    );
}
