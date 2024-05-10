import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import VideoPage from "./Pages/VideoPage/VideoPage";
import UploadPage from "./Pages/UploadPage/UploadPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/videos/:videoId" element={<VideoPage />} />
                    <Route path="/UploadVideo" element={<UploadPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;