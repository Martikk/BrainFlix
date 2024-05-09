// File: components/HomePage.js

import React from 'react';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../components/VideoDetails/VideoDetails';
import CommentsContainer from '../components/CommentContainer/CommentsContainer';
import VideoList from '../components/VideoList/VideoList';

function HomePage({ videos, currentVideo, handleSelectVideo }) {
    return (
        <div>
            {currentVideo ? (
                <>
                    <VideoPlayer video={currentVideo} />
                    <div className='after-hero-video'>
                        <VideoDetails video={currentVideo} />
                        <CommentsContainer videoId={currentVideo.id} />
                        <VideoList videos={videos.filter(v => v.id !== currentVideo.id)} onSelectVideo={handleSelectVideo} />
                    </div>
                </>
            ) : (
                <p>No video selected</p>
            )}
        </div>
    );
}

export default HomePage;
