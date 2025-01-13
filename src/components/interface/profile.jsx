import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Profile = () => {
    const [profile, setProfile] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 
    const baseUrl = 'http://localhost:3001'; 

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please log in first');
            navigate('/login'); 
        } else {
            
            const sanitizedToken = token.replace(/^"|"$/g, '');
            fetchProfile(sanitizedToken);
        }
    }, [navigate]);

    const fetchProfile = async (token) => {
        setLoading(true);
        try {
            const response = await fetch(`${baseUrl}/profile`, {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` },
            });

            if (response.ok) {
                const data = await response.json();
                setProfile(data.message); 
                navigate('/chat'); 
            } else {
                const error = await response.text();
                alert(error);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            alert('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            {loading ? (
                <p>Loading profile...</p>
            ) : (
                <>
                    <h2>Profile</h2>
                    <p>{profile}</p>
                </>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        height: '100vh',
        backgroundColor: '#121212',
        color: '#fff',
    },
};

export default Profile;
