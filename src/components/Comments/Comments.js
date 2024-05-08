import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Comments.scss';

function Comments({ comments, onDeleteComment }) {
    return (
        <ul className="comments">
            {comments.map(comment => (
                <li key={comment.id} className="comments__item">
                    <div className="comments__user-icon"></div>
                    {/* Consider this as a placeholder for user avatars */}
                    <div className="comments__content">
                        <div className="comments__from">
                            <h4 className="comments__author">{comment.name}</h4>
                            <p className="comments__date">
                                {formatDistanceToNow(new Date(comment.timestamp), {addSuffix: true})}
                            </p>
                        </div>
                        <p className="comments__text">{comment.comment}</p>
                    </div>
                    <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default Comments;