import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchVideos} from '../../api/api';
import {useVideoManager} from '../../hook/useVideoManager';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideoList from "../../components/VideoList/VideoList";
import CommentsContainer from '../../components/CommentContainer/CommentsContainer';
import Header from "../../components/Header/Header";
import '../../components/VideoList/VideoList.scss';

function VideoPage() {
    const {videoId} = useParams();
    const [video, setVideo] = useState(null);
    const [otherVideos, setOtherVideos] = useState([]);
    const [error, setError] = useState('');
    const {
        videos,
        searchResults,
        handleSearchChange,
        handleSelectVideo
    } = useVideoManager(); // Assuming useVideoManager provides these


    useEffect(() => {
        const loadVideoAndOthers = async () => {
            try {
                const videoData = await fetchVideos(videoId); // Fetch current video
                const allVideos = await fetchVideos(); // Fetch all videos
                setVideo(videoData);
                setOtherVideos(allVideos.filter(v => v.id !== videoId)); // Filter out the current video from the list
            } catch (err) {
                console.error('Failed to fetch video:', err);
                setError('Failed to load video');
            }
        };

        if (videoId) {
            loadVideoAndOthers();
        }
    }, [videoId]);

    if (error) return <div>Error: {error}</div>;
    if (!video) return <div>Loading...</div>;

    return (
        <div className="VideoPage">
            <Header/>
            <>
                <VideoPlayer video={video}/>
                <div className='after-hero-video'>
                    <VideoDetails video={video}/>
                    <CommentsContainer videoId={videoId}/>
                    <VideoList videos={otherVideos} onSelectVideo={handleSelectVideo}/>
                </div>
            </>
        </div>
    );
}

export default VideoPage;

