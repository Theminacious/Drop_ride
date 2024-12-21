import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            // If no token, navigate to login directly
            navigate('/login');
            return;
        }

        const logoutUser  = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    localStorage.removeItem('token'); // Remove token from local storage
                    navigate('/login'); // Navigate to login page
                }
            } catch (error) {
                console.error('Logout failed:', error);
                // Optionally, handle error (e.g., show a message to the user)
            }
        };

        logoutUser (); // Call the logout function
    }, [navigate]); // Dependency array includes navigate

    return (
        <div></div>
    );
};

export default UserLogout;