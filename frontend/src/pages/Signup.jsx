import React from 'react'
import './Signup.css'
import SignupImage from '../assets/images/Login/SignupImage.png';

function Signup() {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch('http://localhost:8080/user/addUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSuccess('Signup successful! Redirecting...');
        setTimeout(() => {
          window.location.href = '/login';
        }, 1500);
      } else {
        let data;
        try {
          data = await response.json();
        } catch {
          setError('Signup failed: Invalid server response');
          return;
        }
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error: ' + (err.message || 'Please check your server and CORS settings.'));
    }
  };

  // Debug: Show formData as JSON in the console
  React.useEffect(() => {
    console.log('Form Data:', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className='signupPage'>
      <div className="signupContainer">
        <div className="signupFormContainer">
          <h1 className='signupTitle'>Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className='signupInputContainer'>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                className='signupInput'
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className='signupInputContainer'>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className='signupInput'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='signupInputContainer'>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className='signupInput'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="signupError">{error}</div>}
            {success && <div className="signupSuccess">{success}</div>}
            <div className='signupButtonContainer'>
              <button type="submit" className='signupButton'>
                Signup
              </button>
            </div>
            <p className='test' style={{ color: "black" }}>
              Already have an account?{' '}
              <a
                href="/login"
                onClick={e => {
                  e.preventDefault();
                    window.location.href = '/login';
                }}
              >
                Login
              </a>
            </p>
          </form>
        </div>
        <div className='signupImageContainer'>
          <img src={SignupImage} alt="Signup" className='signupImage' />
        </div>
      </div>
    </div>
  );
}

export default Signup
