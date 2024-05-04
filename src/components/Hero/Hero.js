import React from 'react';
import './Hero.scss';

function Hero({ video }) {
    return (
        <div className="hero">
            <video className="hero__video" controls poster={video.image}>
                <source src={video.video} type="video/mp4" />
            </video>
            <h1 className="hero__title">{video.title}</h1>
            <h2 className="hero__channel">{video.channel}</h2>
            <p className="hero__description">{video.description}</p>
            <div className="hero__stats">
                <span>{video.views} views</span>
                <span>{video.likes} likes</span>
            </div>
        </div>
    );
}

export default Hero;
