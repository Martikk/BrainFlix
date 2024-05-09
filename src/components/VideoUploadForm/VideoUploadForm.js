import React, { useState } from 'react';
import './VideoUploadForm.scss';

function VideoUploadForm() {
    const [videoTitle, setVideoTitle] = useState('');
    const [videoDescription, setVideoDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Video Title:', videoTitle);
        console.log('Video Description:', videoDescription);

    };

    return (
        <div className="video-upload-form">
            <form onSubmit={handleSubmit}>
                <div className="thumbnail-section">
                    <label htmlFor="video-thumbnail">VIDEO THUMBNAIL</label>
                    <input id="video-thumbnail" type="file" accept="image/*" />
                </div>
                <div className="input-section">
                    <input
                        type="text"
                        placeholder="Title your video"
                        value={videoTitle}
                        onChange={(e) => setVideoTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Add a description to your video"
                        value={videoDescription}
                        onChange={(e) => setVideoDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="buttons">
                    <button type="button" onClick={() => setVideoTitle('') || setVideoDescription('')}>CANCEL</button>
                    <button type="submit">PUBLISH</button>
                </div>
            </form>
        </div>
    );
}

export default VideoUploadForm;
