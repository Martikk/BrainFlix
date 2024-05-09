import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import icon from '../../assets/Images/Mohan-muruge.jpg';

function Header({ onSearch, searchResults = [], onSelectVideo }) {
    const [inputValue, setInputValue] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onSearch(event.target.value);
        setShowResults(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowResults(false);
        }, 500);
        setInputValue('');
    };

    return (
        <header className="header">
            <Link className="header__logo" to="/">
                <img src={logo} alt="BrainFlix Logo" />
            </Link>
            <input
                className={`header__search ${searchResults.length > 0 ? 'search-active' : ''}`}
                type="search"
                value={inputValue}
                placeholder="Search"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <div className="header__actions">
                <button className="header__upload">Upload</button>
            </div>
            <div className="header__user-icon">
                <img src={icon} alt="ALex Martishyn"/>
            </div>
            {showResults && (
                <ul className="search-results">
                    {searchResults.map(video => (
                        <li key={video.id} onClick={() => onSelectVideo(video.id)} className="search-result-item">
                            {video.title}
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}


export default Header;
