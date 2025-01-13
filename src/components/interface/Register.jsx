// import React, { useState } from 'react';

// function Sign() {
//   const [details, setDetails] = useState({
//     username: '',
//     password: '',
//     confirmPassword: '',
//     email: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDetails({
//       ...details,
//       [name]: value,
//     });
//   };

//   const eventSubmit = (e) => {
//     e.preventDefault();


//     if (!details.username || !details.password || !details.email || !details.confirmPassword) {
//       alert('Please fill in all fields');
//       return;
//     }
    
//     if (details.password !== details.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     console.log(details);
//     alert('Sign up successful');
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.container}>
//         <div style={styles.card}>
//           <form onSubmit={eventSubmit}   action='http://localhost:3004' encType='multipart/form-data' style={styles.form}>
//             <label htmlFor="username" style={styles.label}>Username</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Enter your username"
//               value={details.username}
//               onChange={handleInputChange}
//               style={styles.input}
//             />
            
//             <label htmlFor="password" style={styles.label}>Create Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={details.password}
//               onChange={handleInputChange}
//               style={styles.input}
//             />
            
//             <label htmlFor="confirm-password" style={styles.label}>Confirm Password</label>
//             <input
//               type="password"
//               id="confirm-password"
//               name="confirmPassword"
//               placeholder="Confirm your password"
//               value={details.confirmPassword}
//               onChange={handleInputChange}
//               style={styles.input}
//             />
            
//             <label htmlFor="email" style={styles.label}>Enter Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={details.email}
//               onChange={handleInputChange}
//               style={styles.input}
//             />

//             <input type="submit" value="Sign Up" style={styles.submitButton} />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   pageContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     width:"100%",
//     margin: 0,
//     backgroundColor: '#f7f7f7',
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     width: '400px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//   },
//   label: {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   input: {
//     padding: '10px',
//     fontSize: '14px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     marginTop: '5px',
//   },
//   submitButton: {
//     padding: '10px',
//     fontSize: '16px',
//     backgroundColor: '#007BFF',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   },
// };

// export default Sign;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const baseUrl = 'http://localhost:3001';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        console.log(data);
        setMessage(data.message);

        if (data.message) {
            if (otp !== '') {
                window.location.href = './login.html';
            } else {
                alert('Enter OTP');
            }
        } else {
            alert('Username already taken');
        }
    };

    const handleOtpClick = async (e) => {
        e.preventDefault();

        const res = await fetch(`${baseUrl}/getotp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });

        const data = await res.json();
        console.log(data);
        setOtp(data.otp);
    };

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <div style={styles.registerSection}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label htmlFor="username" style={styles.label}>Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                    />
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.submitBtn}>Register</button>
                    <button onClick={handleOtpClick} style={styles.otpBtn}>Get OTP</button>
                    <input
                        type="text"
                        id="verifyotp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        style={styles.input}
                    />
                    <h1 style={styles.message}>{message}</h1>
                </form>
            </div>

            <div style={styles.buttonsSection}>
                <button onClick={handleHomeClick} style={styles.homeBtn}>Home</button>
                <button onClick={handleLoginClick} style={styles.loginBtn}>Login</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#121212',
        color: '#fff',
        padding: '20px',
    },
    registerSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '350px',
        padding: '30px',
        borderRadius: '8px',
        backgroundColor: '#1E1E1E',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        border: '1px solid #333',
        marginBottom: '20px',
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '10px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        padding: '12px',
        marginBottom: '15px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #555',
        backgroundColor: '#333',
        color: '#fff',
    },
    submitBtn: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#00A1E1',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '10px',
        transition: 'background-color 0.3s ease',
    },
    otpBtn: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#FF5722',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '10px',
        transition: 'background-color 0.3s ease',
    },
    message: {
        textAlign: 'center',
        fontSize: '16px',
        color: '#FF5722',
    },
    buttonsSection: {
        display: 'flex',
        justifyContent: 'center', // Align buttons horizontally
        gap: '15px', // Space between buttons
        marginTop: '20px',
    },
    homeBtn: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#00A1E1',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    loginBtn: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#FF5722',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default Register;
