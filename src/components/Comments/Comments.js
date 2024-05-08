import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Comments.scss';

function Comments({ comments, onDeleteComment }) {
    const handleDelete = (commentId) => {
        const password = prompt("Please enter the password to delete the comment:");
        if (password === "Alex") {
            onDeleteComment(commentId);
        } else {
            alert("Wrong password! The comment was not deleted.");
        }
    };

    return (
        <ul className="comments">
            {comments.map(comment => (
                <li key={comment.id} className="comments__item">
                    <div className="comments__user-icon"></div>
                    <div className="comments__content">
                        <div className="comments__from">
                            <h4 className="comments__author">{comment.name}</h4>
                            <p className="comments__date">
                                {formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true })}
                            </p>
                        </div>
                        <p className="comments__text">{comment.comment}</p>
                    </div>
                    <button className="comments__button-delete" onClick={() => handleDelete(comment.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Comments;