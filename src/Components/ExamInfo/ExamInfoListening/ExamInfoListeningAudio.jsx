import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import LoadingModal from '../../LoadingModal';
import CONFIG from '../../../utils/Config'; // Import the CONFIG

export default function ExamInfoListeningAudio({ data }) {
    const [audioFile, setAudioFile] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); // Track whether the audio is playing
    const { id } = useParams();
    const [loading, setLoading] = useState(false);


    // If data contains an audio path, use it as the audioFile
    useEffect(() => {
        if (data && data) {
            setAudioFile(data); // Set the audio path from data
        }
    }, [data]);

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAudioFile(file); // Store the selected file itself, not the URL
            setIsPlaying(false); // Reset playback state when a new file is selected
            uploadAudio(file);  // Automatically upload the file after selection
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

    const uploadAudio = async (file) => {
        const formData = new FormData();
        formData.append('audio', file);
        setLoading(true);
        try {
            // Use CONFIG.API_URL for the API endpoint
            await axios.post(`/section-update/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data', // Make sure to set content type to multipart/form-data
                },
            });

            Swal.fire({
                title: 'Muvaffaqiyatli!',
                icon: 'success',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Error.',
                icon: 'error',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        } finally {
            setLoading(false);
        }
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
                        url={audioFile ? `${CONFIG.API_URL}/${audioFile}` : ''} // Dynamically create the full URL for the audio file
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                            <path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            )}
            <LoadingModal isOpen={loading} />
        </div>
    );
}
