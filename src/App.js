import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VideoList from './components/VideoList/VideoList';
import './App.scss';
import videosData from './data/videos.json';
import videoDetailsData from './data/video-details.json';
import CommentsContainer from './components/CommentContainer/CommentsContainer';


function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
      const mergedVideos = videosData.map(video => ({
          ...video,
          ...videoDetailsData.find(detail => detail.id === video.id)
      }));
      setVideos(mergedVideos);
      setCurrentVideo(mergedVideos[0]);
  }, []);

  const handleSearchChange = (term) => {
      setSearchResults(term.trim() ? videos.filter(video =>
          video.title.toLowerCase().includes(term.toLowerCase())
      ) : []);
  };

  const handleSelectVideo = (videoId) => {
      const video = videos.find(v => v.id === videoId);
      setCurrentVideo(video);
      setSearchResults([]);
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
          {currentVideo && <Hero video={currentVideo} />}
          {currentVideo && <VideoList videos={videos.filter(v => v.id !== currentVideo.id)} onSelectVideo={handleSelectVideo} />}
          {currentVideo && <CommentsContainer videoId={currentVideo.id} />}
      </div>
  );
}

export default App;