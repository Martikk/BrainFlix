import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import { fetchVideos } from '../../api/api';

function VideoPage() {
    const { videoId } = useParams();  // This should correctly retrieve the videoId from the URL
    const [video, setVideo] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadVideo = async () => {
            try {
                const data = await fetchVideos(videoId);
                setVideo(data);
            } catch (err) {
                console.error('Failed to fetch video:', err);
                setError('Failed to load video');
            }
        };

        if (videoId) {
            loadVideo();
        }
    }, [videoId]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <VideoPlayer video={video} />
            <VideoDetails video={video} />
        </div>
    );
}

export default VideoPage;
