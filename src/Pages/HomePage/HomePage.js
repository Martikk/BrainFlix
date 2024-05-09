import React from 'react';
import { useVideoManager } from '../../hook/useVideoManager';
import VideoList from '../../components/VideoList/VideoList';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CommentsContainer from '../../components/CommentContainer/CommentsContainer';
import './HomePage.scss'

function HomePage() {
    const { videos, currentVideo, handleSelectVideo } = useVideoManager();

    return (
        <div className="HomePage">
            <Header/>
            {currentVideo && (
                <>
                    <VideoPlayer video={currentVideo} />
                    <div className='after-hero-video'>
                        <VideoDetails video={currentVideo} />
                        <CommentsContainer videoId={currentVideo.id} />
                        <VideoList videos={videos.filter(v => v.id !== currentVideo.id)} onSelectVideo={handleSelectVideo} />
                    </div>
                </>
            )}
        </div>
    );
}

export default HomePage;


