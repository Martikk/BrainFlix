import React from 'react';
import './VideoPlayer.scss';

const VideoPlayer = ({ video }) => {
    const videoSrc = video.video.startsWith('http') ? video.video : `${window.location.origin}${video.video}`;

    return (
        <div className="hero">
            <video className="hero__video" controls poster={video.image}>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
