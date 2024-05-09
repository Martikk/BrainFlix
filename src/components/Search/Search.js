import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../api/api';

function Search() {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const handleChange = async (event) => {
        setInputValue(event.target.value);
        if (event.target.value) {
            try {
                const { data } = await apiClient.get(`/videos?search=${event.target.value}`);
                setSearchResults(data);
                setShowResults(true);
            } catch (error) {
                console.error('Failed to fetch videos:', error);
                // Handle error appropriately
            }
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowResults(false);
        }, 500);
        setInputValue('');
    };

    const onSelectVideo = (videoId) => {
        navigate(`/videos/${videoId}`);
    };

    return (
        <div>
            <input
                className={`header__search ${searchResults.length > 0 ? 'search-active' : ''}`}
                type="search"
                value={inputValue}
                placeholder="Search"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {showResults && (
                <ul className="search-results">
                    {searchResults.map(video => (
                        <li key={video.id} onClick={() => onSelectVideo(video.id)} className="search-result-item">
                            {video.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Search;
