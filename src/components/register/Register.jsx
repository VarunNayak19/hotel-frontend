import React, { useState } from 'react';
import './Register.scss';
import axios from 'axios';
import { baseUrl } from '../../url/url';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = ({ setLoggedIn }) => {
    const navigate  = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
    showPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulating an API call for registration (replace with actual API call)
    const formDataPayload = {
        email: formData.email,
        name: formData.name,
        username: formData.username,
        password: formData.password,
    }
    try {
            const response = await axios.post(`${baseUrl}/register`, formDataPayload);
            console.log('Registration successful:', response.data);

      setFormData({
        email: '',
        name: '',
        username: '',
        password: '',
        showPassword: false,
      });

      setLoggedIn(true);
      navigate("/");

      // Redirect the user to the home page (you can use React Router's Navigate or history.push('/home'))
      // Example: navigate('/home') or history.push('/home')
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration failure (e.g., show error message to the user)
    }
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  return (
    <div className='register-container'>
      <form className='register-form-container' onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className='flex-row'>
          <input
            className='form-field'
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type='text'
            className='form-field'
            id='name'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='flex-row'>
          <input
            className='form-field'
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            className='form-field'
            type={formData.showPassword ? 'text' : 'password'}
            id='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='toggle' onClick={togglePasswordVisibility}>
          {formData.showPassword ? 'Hide password' : 'Show password'}
        </div>
        <button type='submit' className='submit-button'>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
