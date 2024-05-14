import React, { useState, useContext } from 'react';
import axios from 'axios';
import { API_URL, API_KEY } from '../../api/api';
import './CommentsForm.scss';
import { UserContext } from '../../context/UserContext';

const CommentForm = ({ onCommentPosted, videoId }) => {
    const [comment, setComment] = useState('');
    const { userName, setUserName } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!comment.trim()) {
            alert('Please enter a comment before submitting.');
            return;
        }
        const payload = { name: userName, comment };
        console.log('Submitting comment:', payload);

        try {
            const response = await axios.post(`${API_URL}/videos/${videoId}/comments/?api_key=${API_KEY}`, payload);
            console.log('Comment posted successfully:', response.data);
            setComment('');
            if (onCommentPosted) {
                onCommentPosted();
            }
        } catch (error) {
            console.error('Failed to post comment:', error);
        }
    };

    const handleUserNameChange = () => {
        const newUserName = window.prompt('Please enter your name:', userName);
        if (newUserName) {
            setUserName(newUserName);
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
