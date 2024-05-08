import React, { useState } from 'react';
import './VideoDetails.scss';


function VideoDetails({ video }) {
    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div className="video-details">
            <h1>{video.title}</h1>
            <p>{video.description}</p>

            <div className='hero__statistic'>
                <button className='hero__views'>
                    {video.views} views
                </button>
                <button  className='hero__like'>
                    {video.likes} likes
                </button>
            </div>
            {video.comments && video.comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.name}: {comment.comment}</p>
                </div>
            ))}
        </div>
    );
}

export default VideoDetails;