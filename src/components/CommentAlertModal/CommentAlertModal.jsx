import React from 'react';
import './CommentAlertModal.scss';

function CommentAlertModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    Please enter a comment before submitting.
                </div>
                <div className="modal-actions">
                    <button onClick={onClose} className="modal-button confirm">OK</button>
                </div>
            </div>
        </div>
    );
}

export default CommentAlertModal;
