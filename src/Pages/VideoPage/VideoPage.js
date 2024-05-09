import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchVideoById } from '../../services/videoService'; // Assuming you have a service function to fetch video data

function VideoPage() {
    const { videoId } = useParams();
    const [video, setVideo] = React.useState(null);

    React.useEffect(() => {
        fetchVideoById(videoId).then(setVideo);
    }, [videoId]);

    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{video.title}</h1>
            {/* Render your video player or other components here */}
        </div>
    );
}

export default VideoPage;
