import React, { useState } from 'react';
import './Header.scss';

function Header({ onSearch, searchResults }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <header className="header">
            <div className="header__logo"></div>
            <input
                className={`header__search ${searchResults.length > 0 ? 'search-active' : ''}`}
                type="search"
                value={inputValue}
                placeholder="Search"
                onChange={handleChange}
                onBlur={() => setInputValue('')}
            />
            <div className="header__actions">
                <button className="header__upload">Upload</button>
            </div>
            <div className="header__user-icon"></div>
        </header>
    );
}

export default Header;