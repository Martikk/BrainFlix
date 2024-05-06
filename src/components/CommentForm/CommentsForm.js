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
        addComment({ name: "BrainFlix", comment: comment.trim() });
        setComment('');
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <div className="comment-form__user-icon"></div> 
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add new comment"></textarea>
            <button type="submit">COMMENT</button>
        </form>
    );
};

export default CommentForm;
