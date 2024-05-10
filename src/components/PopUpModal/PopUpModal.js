import React from 'react';
import './PopUpModal.scss';

function PopUpModal({ isOpen, onClose, onConfirm, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">{children}</div>
                <div className="modal-actions">
                    <button onClick={onConfirm} className="modal-button confirm">Yes</button>
                    <button onClick={onClose} className="modal-button cancel">No</button>
                </div>
            </div>
        </div>
    );
}

export default PopUpModal;
