import React, { useState, useContext } from 'react';
import axios from 'axios';
import { API_URL, API_KEY } from '../../api/api';
import './CommentsForm.scss';
import { UserContext } from '../../context/UserContext';
import CommentAlertModal from '../CommentAlertModal/CommentAlertModal';
import NamePromptModal from '../NamePromptModal/NamePromptModal';

const CommentForm = ({ onCommentPosted, videoId }) => {
    const [comment, setComment] = useState('');
    const { userName, setUserName } = useContext(UserContext);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [isNamePromptModalOpen, setIsNamePromptModalOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!comment.trim()) {
            setIsCommentModalOpen(true);
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
        setIsNamePromptModalOpen(true);
    };

    const handleNameConfirm = (newUserName) => {
        if (newUserName) {
            setUserName(newUserName);
        }
        setIsNamePromptModalOpen(false);
    };

    return (
        <div>
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
            <CommentAlertModal
                isOpen={isCommentModalOpen}
                onClose={() => setIsCommentModalOpen(false)}
            />
            <NamePromptModal
                isOpen={isNamePromptModalOpen}
                onClose={() => setIsNamePromptModalOpen(false)}
                onConfirm={handleNameConfirm}
                defaultValue={userName}
            />
        </div>
    );
};

export default CommentForm;
