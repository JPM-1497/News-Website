import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './signup.css'; // Create this CSS file for styling

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Phone number must contain only numbers"
        isValid = false;
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call to your backend
      // to create the user account.
      console.log('Form data:', formData); // For demonstration
      // Example API call:
      // api.post('/signup', formData)
      //   .then(response => {
      //     setSuccessMessage('Signup successful!');
      //     setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', dateOfBirth: '', password: '', confirmPassword: '' });
      //     setErrors({});
      //   })
      //   .catch(error => {
      //     setErrors({ general: 'Signup failed. Please try again.' });
      //   });
      setSuccessMessage('Signup successful!');
      setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', dateOfBirth: '', password: '', confirmPassword: '' });
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
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className="error-message">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className="error-message">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
            {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          </div>
          <input type="submit" value="Sign Up" />
          {errors.general && <p className="error-message">{errors.general}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;