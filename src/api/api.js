import axios from 'axios';

export const API_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
export const API_KEY = '70dc2d97-5495-49a3-a43d-785c68ef1239';

const apiClient = axios.create({
    baseURL: API_URL,
    params: { api_key: API_KEY }
});

export const fetchVideos = async (videoId = '') => {
    const endpoint = videoId ? `/videos/${videoId}` : '/videos/';
    try {
        const { data } = await apiClient.get(endpoint);
        return data;
    } catch (error) {
        console.error(`Failed to fetch ${videoId ? 'video details' : 'videos'}:`, error);
        throw error;
    }
};

export const postComment = async (videoId, name, comment) => {
    try {
        const { data } = await apiClient.post(`/videos/${videoId}/comments/`, { name, comment });
        return data;
    } catch (error) {
        console.error('Failed to post comment:', error);
        throw error;
    }
};

export const deleteComment = async (videoId, commentId) => {
    try {
        const { data } = await apiClient.delete(`/videos/${videoId}/comments/${commentId}`);
        return data;
    } catch (error) {
        console.error('Failed to delete comment:', error);
        throw error;
    }
};