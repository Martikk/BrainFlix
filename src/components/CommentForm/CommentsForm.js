import React, { useState } from 'react';
import './CommentsForm.scss';

const CommentForm = ({ addComment }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!comment.trim()) {
            alert("Please fill in the comment field.");
            return;
        }
        addComment({ name: "BrainFlix", comment: comment.trim() }); // Example using a fixed name
        setComment('');
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <div className="comment-form__user-icon"></div> 
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Your Comment"></textarea>
            <button type="submit">Post Comment</button>
        </form>
    );
};

export default CommentForm;
