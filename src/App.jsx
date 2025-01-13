import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

// Import components
import Hello from './components/main/Hello'; 
import Home from './components/interface/Home';
import Login from './components/interface/Login';
import Register from './components/interface/Register';
import Profile from './components/interface/profile';

// Add ProjectContent component
function ProjectContent() {
  return (
    <div style={styles.projectContent}>
      <div style={styles.imageContainer}>
        <img src="https://www.xevensolutions.com/wp-content/uploads/2024/02/Googles-Gemini-AI-Uses-Features-and-Industry-Impact-1.jpg" alt="Project" style={styles.projectImage} />
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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);  // State to track dark mode

  // Toggle the dark mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div style={isDarkMode ? styles.appContainerDark : styles.appContainerLight}>
      <Router>
        <AppNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        
        {/* Routes to the different components */}
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<div style={styles.content}><Hello /></div>} />  {/* Chat page */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />                 
            <Route path="/about" element={<ProjectContent />} /> {/* Add the route to show Project Content */}
          </Routes>
        </div>
      </Router>   
    </div>
  );
}

// Navbar component with links to each page
function AppNavbar({ toggleTheme, isDarkMode }) {
  const location = useLocation(); // Get current location

  // Hide the navbar on login, register, and chat pages
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/chat';

  return (
    <>
      {!hideNavbar && (
        <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} style={styles.navbar}>
          <Container>
            <Navbar.Brand as={Link} to="/" style={styles.navBrand}>MyProject</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" style={styles.navItems}>
                <Nav.Item>
                  <Link to="/" className="nav-link" style={styles.navLink}>Home</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/login" className="nav-link" style={styles.navLink}>Login</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/register" className="nav-link" style={styles.navLink}>Register</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/profile" className="nav-link" style={styles.navLink}>Profile</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/chat" className="nav-link" style={styles.navLink}>Chat</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/about" className="nav-link" style={styles.navLink}>About</Link> {/* Link to About page */}
                </Nav.Item>
              </Nav>
              <Button variant={isDarkMode ? "outline-light" : "outline-dark"} onClick={toggleTheme} style={styles.toggleButton}>
                Toggle Theme
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}
const styles = {
  appContainerLight: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    color: '#000',
  },
  appContainerDark: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#333',
    color: '#fff',
  },
  navbar: {
    marginBottom: '20px',
    padding: '10px 20px',
  },
  navBrand: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navItems: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  navLink: {
    color: 'red',
    textDecoration: 'none',
    padding: '10px 15px',
    margin: '0 10px',
  },
  navLinkHover: {
    color: 'black',
    textDecoration: 'underline',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  projectContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
  },
  imageContainer: {
    flex: 1,
    marginRight: '20px',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  projectInfo: {
    maxWidth: '600px',
    fontSize: '16px',
    lineHeight: '1.6',
  },
  toggleButton: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    zIndex: '1000',
  },
  // Media Queries for Responsiveness
  '@media (max-width: 1024px)': {
    navbar: {
      padding: '10px 15px',
    },
    navBrand: {
      fontSize: '22px',
    },
    projectContent: {
      flexDirection: 'column',
    },
    imageContainer: {
      marginRight: '0',
      marginBottom: '20px',
    },
    projectInfo: {
      maxWidth: '90%',
    },
    navItems: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    navLink: {
      margin: '10px 0',
    },
  },

  '@media (max-width: 768px)': {
    navbar: {
      padding: '10px 15px',
    },
    navBrand: {
      fontSize: '18px',
    },
    navItems: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    navLink: {
      margin: '10px 0',
    },
    toggleButton: {
      top: '15px',
      right: '10px',
    },
  },

  '@media (max-width: 425px)': {
    navbar: {
      padding: '10px 10px',
    },
    navBrand: {
      fontSize: '16px',
    },
    navLink: {
      fontSize: '14px',
      padding: '8px 12px',
      margin: '5px 0',
    },
    projectContent: {
      flexDirection: 'column',
    },
    imageContainer: {
      marginRight: '0',
      marginBottom: '15px',
    },
    projectInfo: {
      maxWidth: '100%',
      fontSize: '14px',
    },
    toggleButton: {
      top: '10px',
      right: '10px',
    },
  },
};

export default App;