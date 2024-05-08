// CommentsContainer.js
import React, { useState, useEffect } from 'react';
import Comments from '../Comments/Comments';
import CommentForm from '../CommentForm/CommentsForm';
import { fetchVideoDetails } from '../../api/api';

const CommentsContainer = ({ videoId }) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log('Effect running to fetch comments'); // Debug log
        fetchComments();
    }, [videoId]);

    const fetchComments = async () => {
        setError(false);
        try {
            const videoDetails = await fetchVideoDetails(videoId);
            if (videoDetails && videoDetails.comments) {
                setComments(videoDetails.comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
                console.log('Comments fetched:', videoDetails.comments); // Debug log
            } else {
                setComments([]);
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
            setError(true);
        }
    };

    return (
        <div className="comments-container">
            <h3 className="comments-title">
                {comments.length > 0 ? `${comments.length} Comments` : "No comments available"}
            </h3>
            <h4 className='comments_titles'>JOIN THE CONVERSATION</h4>
            <CommentForm onCommentPosted={fetchComments} videoId={videoId} />
            <Comments comments={comments} />
            {error && <p className="error-message">Failed to load comments. Please try again later.</p>}
        </div>
    );
};

export default CommentsContainer;
