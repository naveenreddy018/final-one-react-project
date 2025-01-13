// components/ProjectContent.js
import React from 'react';

function ProjectContent() {
  return (
    <div style={styles.projectContent}>
      <div style={styles.imageContainer}>
        <img 
          src="https://www.xevensolutions.com/wp-content/uploads/2024/02/Googles-Gemini-AI-Uses-Features-and-Industry-Impact-1.jpg" 
          alt="Project" 
          style={styles.projectImage} 
        />
      </div>
      <div style={styles.projectInfo}>
        <h2>About My Project</h2>
        <p>
          This is a simple project that demonstrates how to integrate a React app with multiple routes and
          components. The project includes login, register, profile, and chat pages, allowing users to navigate
          through a clean and responsive interface. The app is built using React and React Router for navigation.
        </p>
      </div>
    </div>
  );
}

const styles = {
  projectContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
  },
  imageContainer: {
    flex: 1,  // This makes the image container take the remaining space
    marginRight: '20px',
  },
  projectImage: {
    width: '100%', // Make the image fill the container
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  projectInfo: {
    maxWidth: '600px',
    fontSize: '16px',
    lineHeight: '1.6',
  },
};

export default ProjectContent;
