// CommentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './CommentsForm.scss';

const API_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
const API_KEY = '70dc2d97-5495-49a3-a43d-785c68ef1239'; // API Key

let UserName = 'Martishyn Alex';

const CommentForm = ({ onCommentPosted, videoId }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = { name: UserName, comment };
        console.log('Submitting comment:', payload); // Debug log

        try {
            const response = await axios.post(`${API_URL}/videos/${videoId}/comments/?api_key=${API_KEY}`, payload);
            console.log('Comment posted successfully:', response.data); // Debug log
            setComment('');
            if (onCommentPosted) {
                onCommentPosted();
            }
        } catch (error) {
            console.error('Failed to post comment:', error);
        }
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <div className="comment-form__user-icon"></div>
            <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Add new comment"
                className="comment-form__comment-input"
            />
            <button type="submit">COMMENT</button>
        </form>
    );
};

export default CommentForm;
