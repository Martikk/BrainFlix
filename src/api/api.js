import axios from 'axios';

export const API_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
export const API_KEY = '70dc2d97-5495-49a3-a43d-785c68ef1239';

export const fetchVideos = async () => {
    try {
        const response = await axios.get(`${API_URL}/videos/?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch videos:', error);
        throw error;
    }
};

export const fetchVideoDetails = async (videoId) => {
    try {
        const response = await axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch video details:', error);
        throw error;
    }
};

export const postComment = async (videoId, name, comment) => {
    try {
        const response = await axios.post(`${API_URL}/videos/${videoId}/comments/?api_key=${API_KEY}`, {
            name: name,
            comment: comment
        });
        return response.data;
    } catch (error) {
        console.error('Failed to post comment:', error);
        throw error;
    }
};

export const deleteComment = async (videoId, commentId) => {
    try {
        const response = await axios.delete(`${API_URL}/videos/${videoId}/comments/${commentId}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Failed to delete comment:', error);
        throw error;
    }
};
