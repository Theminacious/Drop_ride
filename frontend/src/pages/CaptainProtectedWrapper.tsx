import { useContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

interface CaptainProtectedWrapperProps {
    children: ReactNode;
}
    const CaptainProtectedWrapper: React.FC<CaptainProtectedWrapperProps> = ({ children }) => {
        const captainContext = useContext(CaptainDataContext);
        const setCaptain = captainContext ? captainContext[1] : () => {};
        const [error, setError] = useState<string | null>(null);
        const token = localStorage.getItem('token');
        const navigate = useNavigate();
        const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
            return; // Stop further execution if no token
        }

        const fetchCaptainProfile = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    setCaptain(response.data.captain);
                    setIsloading(false);
                }
            } catch (err) {
                console.error(err);
                localStorage.removeItem('token');
                setError('Unable to fetch captain profile');
                setIsloading(false);
                navigate('/captain-login');
            }
        };

        fetchCaptainProfile();
    }, [token, navigate, setCaptain]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return <>{children}</>;
};

export default CaptainProtectedWrapper;
