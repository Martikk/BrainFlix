import React, { useState, useEffect } from 'react';
import Comments from '../Comments/Comments';
import CommentForm from '../CommentForm/CommentsForm';
import { fetchVideos, deleteComment } from '../../api/api';

const CommentsContainer = ({ videoId }) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(false);

    // Defining fetchComments outside the useEffect so it can be reused
    const fetchComments = async () => {
        setError(false);
        try {
            const videoDetails = await fetchVideos(videoId); // Use the unified function
            if (videoDetails && videoDetails.comments) {
                setComments(videoDetails.comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
            } else {
                setComments([]);
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
            setError(true);
        }
    };

    useEffect(() => {
        console.log('Effect running to fetch comments'); // Debug log
        fetchComments();
    }, [videoId]);

    const handleDeleteComment = async (commentId) => {
        try {
            await deleteComment(videoId, commentId);
            fetchComments(); // Fetch comments again to refresh the list after deletion
        } catch (error) {
            console.error('Error deleting comment:', error);
            setError(true);
        }
    };

    return (
        <div className="comments-container">
            <h3 className="comments-title">
                {comments.length > 0 ? `${comments.length} Comments` : "No comments available"}
            </h3>
            <h4 className='comments-title'>JOIN THE CONVERSATION</h4>
            <CommentForm onCommentPosted={fetchComments} videoId={videoId} />
            <Comments comments={comments} onDeleteComment={handleDeleteComment} />
            {error && <p className="error-message">Failed to load comments. Please try again later.</p>}
        </div>
    );
};

export default CommentsContainer;