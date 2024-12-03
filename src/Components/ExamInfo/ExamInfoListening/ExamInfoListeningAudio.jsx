import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function ExamInfoListeningAudio() {
    const [audioFile, setAudioFile] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); // Track whether the audio is playing

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAudioFile(URL.createObjectURL(file)); // Create URL for the selected file
            setIsPlaying(false); // Reset playback state when a new file is selected
        }
    };

    // Handle cancel button click to reset the selected file
    const handleCancel = () => {
        setAudioFile(null); // Reset the audioFile state
        document.getElementById('audio-upload').value = ''; // Reset the file input value
    };

    // Handle play/pause toggle
    const togglePlay = () => {
        setIsPlaying(!isPlaying); // Toggle the playback state
    };

    return (
        <div className="exam-info-listening-audio p-[10px]">
            {!audioFile && (
                <button
                    className="w-full bg-MainColor text-left py-[10px] px-[20px] rounded-[10px] border-[2px] border-MainColor duration-500 text-[white] hover:bg-transparent hover:text-MainColor"
                    onClick={() => document.getElementById('audio-upload').click()}
                >
                    Audio File tanlash
                </button>
            )}
            <input
                type="file"
                id="audio-upload"
                accept="audio/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            {audioFile && (
                <div className="flex items-center gap-[10px] bg-MainColor" style={{ width: '100%', padding: '10px', borderRadius: '10px' }}>
                    <ReactPlayer
                        url={audioFile}
                        playing={isPlaying} // Use state to control playback
                        controls
                        width="100%"
                        height="50px" // Adjust height as needed
                        style={{ borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                    />
                    <button
                        className="p-[8px] cursor-pointer rounded-[5px] bg-[white] text-MainColor border-[2px] border-[white] duration-300 hover:bg-transparent hover:text-[white]"
                        onClick={handleCancel}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            )}
        </div>
    );
}
