import React, { useState, useEffect, useCallback } from 'react';
import Comments from '../Comments/Comments';
import CommentForm from '../CommentForm/CommentsForm';
import { fetchVideos, deleteComment } from '../../api/api';

const CommentsContainer = ({ videoId }) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(false);

    const fetchComments = useCallback(async () => {
        setError(false);
        try {
            const videoDetails = await fetchVideos(videoId);
            if (videoDetails && videoDetails.comments) {
                setComments(videoDetails.comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
            } else {
                setComments([]);
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
            setError(true);
        }
    }, [videoId]);

    useEffect(() => {
        console.log('Effect running to fetch comments');
        fetchComments();
    }, [fetchComments]);

    const handleDeleteComment = async (commentId) => {
        try {
            await deleteComment(videoId, commentId);
            fetchComments();
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
            <h4 className='comments_titles'>JOIN THE CONVERSATION</h4>
            <CommentForm onCommentPosted={fetchComments} videoId={videoId} />
            <Comments comments={comments} onDeleteComment={handleDeleteComment} />
            {error && <p className="error-message">Failed to load comments. Please try again later.</p>}
        </div>
    );
};

export default CommentsContainer;
