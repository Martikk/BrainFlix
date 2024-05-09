// hooks/useVideos.js
import { useState, useEffect } from 'react';
import { fetchAllVideos, fetchVideoById } from '../api/api';

function useVideos(initialId) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        fetchAllVideos().then(setVideos);
    }, []);

    useEffect(() => {
        if (initialId) {
            fetchVideoById(initialId).then(setSelectedVideo);
        }
    }, [initialId]);

    return { videos, selectedVideo, setSelectedVideo };
}

export default useVideos;
