import React, { useState, useContext } from 'react';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import icon from '../../assets/Images/Mohan-muruge.jpg';
import Search from '../Search/Search';
import { UserContext } from '../../context/UserContext';
import NamePromptModal from '../NamePromptModal/NamePromptModal';

function Header({ onSearch, searchResults, onSelectVideo }) {
    const navigate = useNavigate();
    const { userName, setUserName } = useContext(UserContext);
    const [isNamePromptModalOpen, setIsNamePromptModalOpen] = useState(false);

    const handleUploadClick = () => {
        navigate('/UploadVideo');
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
        <header className="header">
            <Link className="header__logo" to="/">
                <img src={logo} alt="BrainFlix Logo" />
            </Link>
            <Search onSearch={onSearch} searchResults={searchResults} onSelectVideo={onSelectVideo} />
            <div className="header__actions">
                <button className="header__upload" onClick={handleUploadClick}>Upload</button>
            </div>
            <div className="header__user-icon" onClick={handleUserNameChange}>
                <img src={icon} alt="User Icon" />
            </div>
            <NamePromptModal
                isOpen={isNamePromptModalOpen}
                onClose={() => setIsNamePromptModalOpen(false)}
                onConfirm={handleNameConfirm}
                defaultValue={userName}
            />
        </header>
    );
}

export default Header;
