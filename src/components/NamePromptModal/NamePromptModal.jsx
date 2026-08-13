import React, { useState } from 'react';
import './NamePromptModal.scss';

function NamePromptModal({ isOpen, onClose, onConfirm, defaultValue }) {
    const [name, setName] = useState(defaultValue);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <label>Please enter your name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="modal-input"
                    />
                </div>
                <div className="modal-actions">
                    <button onClick={() => onConfirm(name)} className="modal-button confirm">OK</button>
                    <button onClick={onClose} className="modal-button cancel">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default NamePromptModal;
