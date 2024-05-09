import React from 'react';
import Header from "../../components/Header/Header";
import VideoUploadForm from "../../components/VideoUploadForm/VideoUploadForm";

function UploadPage () {
    return (
        <div className="HomePage">
            <Header/>
            <VideoUploadForm/>
        </div>
    );
}

export default UploadPage;