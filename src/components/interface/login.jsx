import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async () => {

        if(username === "" || password === ""){
            alert("enter details properly ")

        }
      

        const res = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        console.log(data);

        localStorage.setItem("token", JSON.stringify(data.token1));
        navigate('/profile');

    };

    const handleRegisterClick = () => {
        navigate("/register"); 
    };

    const handleHomeClick = () => {
        navigate("/"); 
    };

    return (
        <div style={styles.container}>
            <form id="login" onSubmit={handleSubmit} style={styles.form}>
                <label htmlFor="name" style={styles.label}>Username</label>
                <input 
                    id="name"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                <label htmlFor="pass" style={styles.label}>Password</label>
                <input 
                    id="pass"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <input type="submit" value="Login" style={styles.submitBtn} />
            </form>

            <div style={styles.buttonContainer}>
                <button onClick={handleHomeClick} style={styles.button}>Home</button>
                <button onClick={handleRegisterClick} style={styles.button}>Register</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#121212',
        color: '#fff',
        padding: '20px',
        flexDirection: 'column', 
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '30px',
        borderRadius: '8px',
        backgroundColor: '#1E1E1E',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        marginBottom: '20px', // Space between form and buttons
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
        transition: 'background-color 0.3s ease',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px', // Ensure buttons are not stretched
        marginTop: '20px',
    },
    button: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#FF5722',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        width: '48%', // Make the buttons take equal width
    },
};

export default Login;
