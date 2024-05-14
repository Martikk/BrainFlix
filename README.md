# BranFlex Video Sharing Platform Enhancement

## Project Overview

Welcome to the official website repository of BranFlex. Visit the live site: [BranFlex](https://brainflixalex.netlify.app/).

Continuing the development of BranFlex, this sprint introduces significant enhancements to our video sharing platform, transitioning from static JSON data to dynamic API interactions. The updates focus on improving user interaction, data management, and adding new features for a more engaging and personalized experience.

## Features Update

### API Integration
- **Dynamic Data Fetching**: Replaced local JSON with API calls for real-time video and comment data fetching and manipulation.
- **Comment Management**: Users can now post, view, and securely delete comments through API integration, with deletions protected by password verification.

### User Interaction
- **User Change Functionality**: Implemented a feature allowing users to change their username dynamically throughout the session for personalized comments.
- **Search Component**: Extracted search functionality into a dedicated component to streamline the codebase and enhance performance.

### Video Upload and Animation
- **Video Upload Page**: Added a new page for users to upload videos, enriching the content diversity of the platform.
- **Upload Feedback Animation**: Introduced animations post-upload, providing a visually appealing confirmation before redirecting to the home page.

### Routing with React Router
- **Enhanced Navigation**: Utilizing `react-router-dom` for routing, including a new route for the video upload page which expands the navigational structure of the application.

## Technologies Used
- Updated to include Axios for API interactions, replacing static data handling with dynamic server communications.

## Development Approach

### Revised Component Structure
- **Search**: Now a standalone component managing all search functionalities.
- **CommentsContainer**: Enhanced to handle API-driven comment posting and deletions with added security measures.
- **UploadPage**: New component managing video uploads with user feedback through animations.

### Improved State and Data Management
- Shifted from static file reading to API calls using hooks like `useState` and `useEffect` for managing application state and effects based on user actions and API responses.

## Getting Started

To run the project, ensure you have the Express server running locally. Follow these steps:

1. Clone the repository.
2. Install dependencies for both the frontend and backend:
   ```bash
   npm install
   npm run server
   npm start

## Enhanced Search Functionality and Secure Comment Management

```javascript
const handleSearchChange = (term) => {
  if (term.trim()) {
    const fetchSearchResults = async () => {
      const { data } = await axios.get(`api/videos/search/${term}`);
      setSearchResults(data);
    };
    fetchSearchResults();
  } else {
    setSearchResults([]);
  }
};

const handleDeleteComment = async (videoId, commentId, password) => {
  try {
    await axios.delete(`api/videos/${videoId}/comments/${commentId}`, { data: { password } });
    fetchComments(videoId);
  } catch (error) {
    console.error('Error deleting comment:', error);
  }
};

```
## Uploading Videos with User Feedback Animation

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!videoTitle.trim() || !videoDescription.trim() || !file) {
    toast.error('Please fill in all fields and upload an image.', {
      position: "top-center",
      autoClose: 2000
    });
    return;
  }

  const formData = new FormData();
  formData.append('title', videoTitle);
  formData.append('description', videoDescription);
  formData.append('channel', userName); 
  formData.append('image', file);

  try {
    await uploadVideo(formData);
    setSubmitSuccess(true);
    toast.success('Upload successful!', {
      position: "top-center",
      autoClose: 2000
    });
  } catch (error) {
    toast.error('Failed to upload video.', {
      position: "top-center",
      autoClose: 2000
    });
  }
};
```

## Dynamic Username Change Functionality

```javascript
const handleUserNameChange = () => {
  const newUserName = window.prompt('Please enter your name:', userName);
  if (newUserName) {
    setUserName(newUserName);
  }
};
```

