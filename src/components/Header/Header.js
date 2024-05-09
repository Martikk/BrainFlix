import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import icon from '../../assets/Images/Mohan-muruge.jpg';
import Search from '../Search/Search'; // Import the Search component

function Header({ onSearch, searchResults, onSelectVideo }) {
    return (
        <header className="header">
            <Link className="header__logo" to="/">
                <img src={logo} alt="BrainFlix Logo" />
            </Link>
            <Search onSearch={onSearch} searchResults={searchResults} onSelectVideo={onSelectVideo} />
            <div className="header__actions">
                <button className="header__upload">Upload</button>
            </div>
            <div className="header__user-icon">
                <img src={icon} alt="ALex Martishyn"/>
            </div>
        </header>
    );
}

export default Header;
