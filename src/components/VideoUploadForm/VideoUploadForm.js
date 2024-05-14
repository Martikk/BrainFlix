import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import './VideoUploadForm.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopUpModal from '../PopUpModal/PopUpModal';
import successBackground from '../../assets/Images/loading.gif';
import { uploadVideo } from '../../api/api';
import { UserContext } from '../../context/UserContext';

function VideoUploadForm() {
    const [videoTitle, setVideoTitle] = useState('');
    const [videoDescription, setVideoDescription] = useState('');
    const [file, setFile] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [cancelSuccess, setCancelSuccess] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const { userName } = useContext(UserContext);

    useEffect(() => {
        if (submitSuccess || cancelSuccess) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [submitSuccess, cancelSuccess, navigate]);

    const onDrop = useCallback((acceptedFiles) => {
        setFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'video/*',
        maxFiles: 1
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!videoTitle.trim() || !videoDescription.trim() || !file) {
            toast.error('Please fill in all fields and upload a video.', {
                position: "top-center",
                autoClose: 2000
            });
            return;
        }

        const formData = new FormData();
        formData.append('title', videoTitle);
        formData.append('description', videoDescription);
        formData.append('channel', userName);  // Include username as the channel name
        formData.append('video', file);

        try {
            await uploadVideo(formData);
            setSubmitSuccess(true);
            toast.success('Upload successful!', {
                position: "top-center",
                autoClose: 2000
            });
        } catch (error) {
            toast.error('Failed to upload video.', {
                position: "top-center",
                autoClose: 2000
            });
        }
    };

    const handleCancel = () => {
        setShowModal(true);
    };

    const closeCancelModal = () => {
        setShowModal(false);
    };

    const confirmCancel = () => {
        setCancelSuccess(true);
        toast.error('Upload cancelled.', {
            position: "top-center",
            autoClose: 2000
        });
        setTimeout(() => {
            setVideoTitle('');
            setVideoDescription('');
            setFile(null);
            setShowModal(false);
        }, 2000);
    };

    if (submitSuccess || cancelSuccess) {
        return (
            <div style={{ width: '100%', height: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    theme="light"
                />
                <img src={successBackground} alt={submitSuccess ? "Loading" : "Canceling"} />
            </div>
        );
    }

    return (
        <div className="video-upload-form">
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
            <PopUpModal isOpen={showModal} onClose={closeCancelModal} onConfirm={confirmCancel}>
                Are you sure you want to cancel the upload?
            </PopUpModal>
            <h1 className="video-upload-form__title">Upload Video</h1>
            <div className="video-upload-form__separator_2"></div>
            <form className="video-upload-form__form" onSubmit={handleSubmit}>
                <div className="video-upload-form__form__input-container">
                    <p className="video-upload-form__video-title">Upload File</p>
                    <div
                        {...getRootProps({ className: 'video-upload-form__dropzone' })}
                    >
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>Drag 'n' drop some files here, or click to select files</p>
                        }
                        {file && <video className="video-upload-form__dropzone__video" src={URL.createObjectURL(file)} controls />}
                    </div>
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
