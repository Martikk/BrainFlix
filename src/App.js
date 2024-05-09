import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
// import VideoPage from "./Pages/VideoPage/VideoPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/*<Route path="/videos/:videoId" element={<VideoPage />} />*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;


