# Sprint 1: Video Sharing Platform

## Project Overview

Welcome to the official website repository of BranFlex. Visit the live site: [BranFlex](https://brainflixalex.netlify.app/).

This dynamic video sharing platform enables users to explore, watch, and interact with video content. It features a robust frontend built using React, showcasing capabilities like video streaming, dynamic searching, commenting, and responsive layouts.

## Features

### Video Playback
- **VideoPlayer Component**: Manages video rendering with standard controls and supports multiple video formats.

### Dynamic Search
- **Header Component**: Incorporates a search bar that filters videos based on user input in real-time.

### Comments
- **CommentsContainer**: Manages comments for each video, including posting new comments and displaying existing ones.
- **CommentForm**: Allows users to submit new comments, ensuring the input field is not empty through form validation.

### Video Details
- **VideoDetails**: Displays detailed information about the video such as the title, uploader, view count, like count, and description.

### Video Listing
- **VideoList**: Lists all videos except the currently playing video, allowing users to select another video to watch.

### Future Enhancements

### Backend Integration: 
- **To handle data storage and retrieval more efficiently**

### Authentication: 
- **For personalizing user experiences and securing user data**

### Advanced Search: 
- **Enhancing search capabilities with filters by categories or tags**

## Technologies Used

- **React**: For efficient DOM management and reusable components.
- **SCSS**: For styling components using variables and mixins to maintain a consistent style and simplify media queries.
- **JSON**: Simulates data interaction with a backend using local JSON files for video data and details.

## Development Approach

### Component Structure
Organized into key React components:
- `Header`: Navigation and dynamic searching.
- `VideoPlayer`: Video playback rendering.
- `VideoDetails`: Shows information about the current video.
- `CommentsContainer`: Manages all comment-related functionalities.
-- `CommentsForm`: Be able to live a comment.
- `VideoList`: Displays a clickable list of videos.

### State Management
Uses React's `useState` and `useEffect` for responsive UI updates based on user interactions and data fetching.

### Data Handling
Data is loaded from local JSON files:
- `videos.json`: Basic information on each video.
- `video-details.json`: Detailed information including comments and statistics for each video.

### Styling
Styled using SCSS for modularity and responsiveness. Mixins and variables are employed to keep the design coherent.

## Code Highlights

### Search Functionality and Comment Fetching and Posting
```javascript

const handleSearchChange = (term) => {
  setSearchResults(term.trim() ? videos.filter(video =>
      video.title.toLowerCase().includes(term.toLowerCase())
  ) : []);
};

const fetchComments = (videoId) => {
  const videoDetails = videoDetailsData.find(video => video.id === videoId);
  if (videoDetails && videoDetails.comments) {
      setComments(videoDetails.comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
  }
};