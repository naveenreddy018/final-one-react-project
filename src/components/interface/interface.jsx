import React, { useState } from 'react';

function Sign() {
  const [details, setDetails] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const eventSubmit = (e) => {
    e.preventDefault();


    if (!details.username || !details.password || !details.email || !details.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    
    if (details.password !== details.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log(details);
    alert('Sign up successful');
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <div style={styles.card}>
          <form onSubmit={eventSubmit}   action='http://localhost:3004' encType='multipart/form-data' style={styles.form}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={details.username}
              onChange={handleInputChange}
              style={styles.input}
            />
            
            <label htmlFor="password" style={styles.label}>Create Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={details.password}
              onChange={handleInputChange}
              style={styles.input}
            />
            
            <label htmlFor="confirm-password" style={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={details.confirmPassword}
              onChange={handleInputChange}
              style={styles.input}
            />
            
            <label htmlFor="email" style={styles.label}>Enter Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={details.email}
              onChange={handleInputChange}
              style={styles.input}
            />

            <input type="submit" value="Sign Up" style={styles.submitButton} />
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width:"100%",
    margin: 0,
    backgroundColor: '#f7f7f7',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '400px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  submitButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Sign;
