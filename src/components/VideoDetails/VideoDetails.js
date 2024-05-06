import React, { useState } from 'react';
import './VideoDetails.scss';


function parseNumberWithCommas(value) {
    return Number(value.replace(/,/g, ''));
}

export function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric'
    });
}

function VideoDetails({ video }) {
    // Parse views and likes ///numbers correctly
    const [views, setViews] = useState(parseNumberWithCommas(video.views));
    const [likes, setLikes] = useState(parseNumberWithCommas(video.likes));

    const handleViewClick = () => {
        setViews(prevViews => prevViews + 1);
    };

    const handleLikeClick = () => {
        setLikes(prevLikes => prevLikes + 1);
    };

    return (
        <div className="hero__name">
            <h1 className="hero__title">{video.title}</h1>
            <div className="hero__stats">
                <div className='hero__channel'>
                    <h2 className="hero__channel__author">{video.channel}</h2>
                    <h4 className="hero__channel__data">{formatDate(video.timestamp)}</h4>
                </div>
                <div className='hero__statistic'>
                    <button onClick={handleViewClick} className='hero__views'>
                        {views.toLocaleString()} views
                    </button>
                    <button onClick={handleLikeClick} className='hero__like'>
                        {likes.toLocaleString()} likes
                    </button>
                </div>
            </div>
            <p className="hero__description">{video.description}</p>
        </div>
    );
}

export default VideoDetails;
