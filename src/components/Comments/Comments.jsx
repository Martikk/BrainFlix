import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Comments.scss';
import PasswordPromptModal from '../PasswordPromptModal/PasswordPromptModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Comments({ comments, onDeleteComment }) {
    const [isPasswordPromptModalOpen, setIsPasswordPromptModalOpen] = useState(false);
    const [currentCommentId, setCurrentCommentId] = useState(null);

    const handleDeleteClick = (commentId) => {
        setCurrentCommentId(commentId);
        setIsPasswordPromptModalOpen(true);
    };

    const handlePasswordConfirm = (password) => {
        setIsPasswordPromptModalOpen(false);
        if (password === "Alex") {
            onDeleteComment(currentCommentId);
            toast.success("Password confirmed. Comment deleted.");
        } else {
            toast.error("Wrong password! The comment was not deleted.");
        }
    };

    return (
        <div>
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
                        <button className="comments__button-delete" onClick={() => handleDeleteClick(comment.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <PasswordPromptModal
                isOpen={isPasswordPromptModalOpen}
                onClose={() => setIsPasswordPromptModalOpen(false)}
                onConfirm={handlePasswordConfirm}
            />
            <ToastContainer />
        </div>
    );
}

export default Comments;
