import React, { useState, useEffect } from 'react';
import Comments from '../Comments/Comments';
import CommentForm from '../CommentForm/CommentsForm';
import videoDetailsData from '../../data/video-details.json'; // Путь может отличаться в зависимости от структуры вашего проекта

const CommentsContainer = ({ videoId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments(videoId);
    }, [videoId]);

    const fetchComments = (videoId) => {
        const videoDetails = videoDetailsData.find(video => video.id === videoId);
        if (videoDetails && videoDetails.comments) {
            setComments(videoDetails.comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
        }
    };

    const addComment = (newComment) => {

        console.log("Add comment logic needed here");
    };

    return (
        <div className="comments-container">
            <h3 className="comments-title">Comments</h3>
            <CommentForm addComment={addComment} />
            <Comments comments={comments} />
        </div>
    );
};

export default CommentsContainer;
