import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoUploadForm.scss';
import runner from '../../assets/Images/Upload-video-preview.jpg';
import successBackground from '../../assets/Images/loading.gif';

function VideoUploadForm() {
    const [videoTitle, setVideoTitle] = useState('');
    const [videoDescription, setVideoDescription] = useState('');
    const [file, setFile] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [cancelSuccess, setCancelSuccess] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!videoTitle.trim() || !videoDescription.trim()) {
            alert('Please fill in all fields.');
            return;
        }
        console.log('Video Title:', videoTitle);
        console.log('Video Description:', videoDescription);
        setSubmitSuccess(true);
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    const handleCancel = () => {
        if (window.confirm('Are you sure you want to cancel?')) {
            setCancelSuccess(true);
            setTimeout(() => {
                setVideoTitle('');
                setVideoDescription('');
                setFile(null);
                navigate('/');
            }, 1000);
        }
    };

    if (submitSuccess) {
        return (
            <div style={{ width: '100%', height: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={successBackground} alt="Loading" />
            </div>
        );
    }

    if (cancelSuccess) {
        return (
            <div style={{ width: '100%', height: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={successBackground} alt="Canceling" />
            </div>
        );
    }

    return (
        <div className="video-upload-form">
            <h1 className="video-upload-form__title">Upload Video</h1>
            <div className="video-upload-form__separator_2"></div>
            <form className="video-upload-form__form" onSubmit={handleSubmit}>
                <div className="video-upload-form__form__input-container">
                    <p className="video-upload-form__video-title">VIDEO THUMBNAIL</p>
                    <img
                        className="video-upload-form__video-image"
                        src={runner}
                        alt="Upload Thumbnail"
                        onClick={triggerFileInput}
                    />
                    <input
                        id="fileInput"
                        type="file"
                        onChange={handleFileChange}
                        style={{display: 'none'}}
                    />
                </div>
                <div className="video-upload-form__input-section">
                    <p className="video-upload-form__input-title">TITLE YOUR VIDEO</p>
                    <input
                        className="video-upload-form__input"
                        type="text"
                        placeholder="Add a title to your video"
                        value={videoTitle}
                        onChange={(e) => setVideoTitle(e.target.value)}
                    />
                    <p className="video-upload-form__textarea-title">ADD A VIDEO DESCRIPTION</p>
                    <textarea
                        className="video-upload-form__textarea"
                        placeholder="Add a description to your video"
                        value={videoDescription}
                        onChange={(e) => setVideoDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="video-upload-form__separator_3"></div>
                <div className="video-upload-form__buttons">
                    <button
                        className="video-upload-form__button video-upload-form__button--cancel"
                        type="button"
                        onClick={handleCancel}
                    >
                        CANCEL
                    </button>
                    <button
                        className="video-upload-form__button video-upload-form__button--publish"
                        type="submit"
                    >
                        PUBLISH
                    </button>
                </div>
            </form>
        </div>
    );
}

export default VideoUploadForm;