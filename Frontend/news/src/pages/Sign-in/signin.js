import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './signin.css'; // Create this CSS file for styling

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call to your backend
      // to authenticate the user.
      console.log('Form data:', formData); // For demonstration
      // Example API call:
      // api.post('/signin', formData)
      //   .then(response => {
      //     setSuccessMessage('Signin successful!');
      //     setFormData({ email: '', password: '' });
      //     setErrors({});
      //   })
      //   .catch(error => {
      //     setErrors({ general: 'Signin failed. Please try again.' });
      //   });
      setSuccessMessage('Signin successful!');
      setFormData({ email: '', password: '' });
      setErrors({});
    }
  };

  const location = useLocation();

  return (
  <div>
    <h1 className="page-title">Straight Up News</h1>
    <div className="container">
      <nav className="navbar">
        <Link to="/signup" className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`}>Sign Up</Link>
        <Link to="/signin" className={`nav-link ${location.pathname === '/signin' ? 'active' : ''}`}>Sign In</Link>
      </nav>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <input type="submit" value="Sign In" />
        {errors.general && <p className="error-message">{errors.general}</p>}
      </form>
    </div>
  </div>
  );
};

export default SignIn;