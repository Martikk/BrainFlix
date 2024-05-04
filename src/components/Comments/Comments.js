import React from 'react';
import './Comments.scss';

function Comments({ comments }) {
    return (
        <div className="comments">
            {comments.map(comment => (
                <div key={comment.id} className="comments__item">
                    <div className="comments__user-icon"></div>
                    <div className="comments__content">
                        <p className="comments__author">{comment.name}</p>
                        <p className="comments__text">{comment.comment}</p>
                        <p className="comments__date">{new Date(comment.timestamp).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Comments;

