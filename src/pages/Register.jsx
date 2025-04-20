import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Authform from '../components/Authform';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    setLoading(true);
    setError('');
    try {
      // Replace with your actual registration API call
      console.log('Registration data:', data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return <Authform type="register" onSubmit={handleSubmit} loading={loading} error={error} />;
};

export default Register;