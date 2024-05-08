import React, { useState, useEffect } from 'react';
import './VideoDetails.scss';

export function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
}
function parseNumberWithCommas(value) {
    return Number(value.replace(/,/g, ''));
}

function VideoDetails({ video }) {

    const [likes, setLikes] = useState(parseNumberWithCommas(video.likes));

    useEffect(() => {
        setLikes(parseNumberWithCommas(video.likes));
    }, [video.likes]);

    if (!video) {
        return <div>Loading...</div>;
    }

    // Функция для увеличения лайков
    function handleLike() {
        setLikes(prevLikes => prevLikes + 1);
    }

    return (
        <div className="hero__name">
            <h1 className="hero__title">{video.title}</h1>
            <div className="hero__stats">
                <div className='hero__channel'>
                    <h2 className="hero__channel__author">{video.channel}</h2>
                    <h4 className="hero__channel__data">{formatDate(video.timestamp)}</h4>
                </div>
                <div className='hero__statistic'>
                    <button className='hero__views'>
                        {video.views} views
                    </button>
                    <button className='hero__like' onClick={handleLike}>
                        {likes} likes
                    </button>
                </div>
            </div>
            <p className="hero__description">{video.description}</p>
        </div>
    );
}

export default VideoDetails;
