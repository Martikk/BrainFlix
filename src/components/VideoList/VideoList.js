import React from 'react';
import './VideoList.scss';

function VideoList({ videos, onSelectVideo }) {
    return (
        <ul className="video-list">
            <h4 className="video-list__maintitle">NEXT VIDEOS</h4>
            {videos.map(video => (
                <li key={video.id} className="video-list__item" onClick={() => onSelectVideo(video.id)}>
                    <img src={video.image} alt={video.title} className="video-list__thumbnail" />
                    <div className="video-list__info">
                        <h4 className="video-list__title">{video.title}</h4>
                        <p className="video-list__channel">{video.channel}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default VideoList;
