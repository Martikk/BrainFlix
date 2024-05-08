import React, { useState, useEffect } from 'react';
import { fetchVideos, fetchVideoDetails } from './api/api'; // Adjust the path as necessary
import VideoList from './components/VideoList/VideoList';
import VideoDetails from './components/VideoDetails/VideoDetails';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import CommentsContainer from './components/CommentContainer/CommentsContainer';

function App() {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function loadVideos() {
            try {
                const videosData = await fetchVideos();
                setVideos(videosData);
                if (videosData.length > 0) {
                    setCurrentVideo(videosData[0]); // Automatically select the first video
                }
            } catch (error) {
                console.error('Error loading videos:', error);
            }
        }

        loadVideos();
    }, []);

    const handleSearchChange = (searchTerm) => {
        const results = videos.filter(video => video.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    };

    const handleSelectVideo = async (videoId) => {
        try {
            const videoDetails = await fetchVideoDetails(videoId);
            setCurrentVideo(videoDetails);
        } catch (error) {
            console.error('Error fetching video details:', error);
        }
    };

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
