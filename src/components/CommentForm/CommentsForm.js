import axios from 'axios';
import { API_URL, API_KEY } from '../../api/api';
import './CommentsForm.scss';
import React, { useState } from 'react';

let UserName = 'Martishyn Alex';

const CommentForm = ({ onCommentPosted, videoId }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // сheck//
        if (!comment.trim()) {
            alert('Please enter a comment before submitting.');
            return;
        }
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
    const handleUserNameChange = () => {
        const newUserName = window.prompt('Please enter your name:', UserName);
        if (newUserName) {
            UserName = newUserName;
        }
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <div className="comment-form__user-icon" onClick={handleUserNameChange}></div>
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
