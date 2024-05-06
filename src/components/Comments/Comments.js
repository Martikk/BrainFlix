import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Comments.scss';

function Comments({ comments }) {
    return (
        <div className="comments">
            {comments.map(comment => (
                <div key={comment.id} className="comments__item">
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
                </div>
            ))}
        </div>
    );
}

export default Comments;
