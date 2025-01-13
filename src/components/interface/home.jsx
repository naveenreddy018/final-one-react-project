import React from 'react';

function Home() {
  return (
    <div style={styles.homeContainer}>
      <h1>Welcome to My Project!</h1>
      <p>This is the home page where you can see the latest content and updates.</p>
      <p>Feel free to explore the app using the navigation bar above!</p>
      
      {/* Example content */}
      <div style={styles.exampleContent}>
        <h2>Latest Feature</h2>
        <p>We have added a new chat feature that allows you to interact with other users. Try it out!</p>
      </div>
    </div>
  );
}

const styles = {
  homeContainer: {
    padding: '20px',
    textAlign: 'center',
  },
  exampleContent: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
};

export default Home;
