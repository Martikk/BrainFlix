import React, { useState } from 'react';
import './VideoDetails.scss';


function VideoDetails({ video }) {
    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div className="video-details">
            <h1>{video.title}</h1>
            <p className="hero__channel__data">{video.channel}</p>
            <div className='hero__statistic'>
                <button className='hero__views'>
                    {video.views} views
                </button>
                <button className='hero__like'>
                    {video.likes} likes
                </button>
            </div>
            <p className="hero__description">{video.description}</p>
                </div>
    );
}

export default VideoDetails;



