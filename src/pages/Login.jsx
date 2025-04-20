import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/Authform';


const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    setLoading(true);
    setError('');
    try {
      // Replace with your actual login API call
      console.log('Login data:', data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return <AuthForm type="login" onSubmit={handleSubmit} loading={loading} error={error} />;
};

export default Login;