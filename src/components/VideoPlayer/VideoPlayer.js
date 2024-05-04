import React from 'react';
import './VideoPlayer.scss'

function VideoPlayer({ video }) {
    return (
        <div className="hero">
            <video className="hero__video" controls poster={video.image}>
                <source src={video.video} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoPlayer;
