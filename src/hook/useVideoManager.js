import { useState, useEffect } from 'react';
import { fetchVideos, fetchVideoDetails } from '../api/api';

export function useVideoManager() {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function loadVideos() {
            try {
                const videosData = await fetchVideos();
                setVideos(videosData);
                if (videosData.length > 0) {
                    const detailedVideo = await fetchVideoDetails(videosData[0].id);
                    setCurrentVideo(detailedVideo);
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
            setSearchResults([]); // Clear search results after selecting a video
        } catch (error) {
            console.error('Error fetching video details:', error);
        }
    };

    return { videos, currentVideo, searchResults, handleSearchChange, handleSelectVideo };
}
