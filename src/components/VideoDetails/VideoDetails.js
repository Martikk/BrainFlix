import React from 'react';
import './VideoDetails.scss';

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric'
    });
}

function VideoDetails({ video }) {
    return (
        <div className="hero__name">
            <h1 className="hero__title">{video.title}</h1>
            <div className="hero__stats">
                <div className='hero__channel'>
                    <h2 className="hero__channel__author">{video.channel}</h2>
                    <h4 className="hero__channel__data">{formatDate(video.timestamp)}</h4>
                </div>
                <div className='hero__statistic'>
                    <div className='hero__views'>{video.views}</div>
                    <div className='hero__like'>{video.likes}</div>
                </div>
            </div>
            <p className="hero__description">{video.description}</p>
        </div>
    );
}

export default VideoDetails;
