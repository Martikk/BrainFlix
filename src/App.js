import React from 'react';
import { useVideoManager } from './hook/useVideoManager';
import VideoList from './components/VideoList/VideoList';
import VideoDetails from './components/VideoDetails/VideoDetails';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import CommentsContainer from './components/CommentContainer/CommentsContainer';
import './App.scss'

function App() {
    const { videos, currentVideo, searchResults, handleSearchChange, handleSelectVideo } = useVideoManager();

    return (
        <div className="app">
            <Header onSearch={handleSearchChange} searchResults={searchResults} />
            <div className="search-results">
                {searchResults.map(video => (
                    <div key={video.id} onClick={() => handleSelectVideo(video.id)} className="search-result-item">
                        {video.title}
                    </div>
                ))}
            </div>
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

export default App;
