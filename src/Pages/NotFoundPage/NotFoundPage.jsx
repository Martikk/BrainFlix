import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';
import HomePage from "../HomePage/HomePage";

function NotFoundPage() {
    return (
        <div className="not-found">
            <h1 className="not-found__header">404 - Page Not Found</h1>
            <p className="not-found__text">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link to="/" className="not-found__home-button">Return Home</Link> {HomePage}
        </div>
    );
}

export default NotFoundPage;
