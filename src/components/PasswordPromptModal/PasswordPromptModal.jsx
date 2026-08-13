import React, { useState, useEffect } from 'react';
import './PasswordPromptModal.scss';

function PasswordPromptModal({ isOpen, onClose, onConfirm }) {
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isOpen) {
            setPassword(''); // Clear password when modal opens
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <label>Please enter the password to delete the comment:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="modal-input"
                    />
                </div>
                <div className="modal-actions">
                    <button onClick={() => onConfirm(password)} className="modal-button confirm">OK</button>
                    <button onClick={onClose} className="modal-button cancel">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default PasswordPromptModal;
