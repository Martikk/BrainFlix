import { useState, useEffect } from 'react';
import { fetchVideos, fetchVideoDetails }  from '../../api/api';

function useVideoState() {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videosData = await fetchVideos(); // Используем fetchVideos
                setVideos(videosData);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (term) => {
        setSearchResults(term.trim() ? videos.filter(video =>
            video.title.toLowerCase().includes(term.toLowerCase())
        ) : []);
    };

    const handleSelectVideo = async (videoId) => {
        try {
            const videoDetails = await fetchVideoDetails(videoId);
            setCurrentVideo(videoDetails);
            setSearchResults([]);
        } catch (error) {
            console.error('Error fetching video details:', error);
        }
    };

    return { videos, currentVideo, searchResults, handleSearchChange, handleSelectVideo };
}

export default useVideoState;