import React, { useState } from 'react';

import "./bookATable.scss"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { baseUrl } from '../../url/url';
import Loader from '../../components/Loader/Loader';
const BookATable = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toTimeString().split(' ')[0];
    const [loading,setLoading] = useState(false);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        name: '',
        email: '',
        people: '1' // Default value for number of people dropdown
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Here you can perform actions with the form data, for example:
        console.log('Form submitted with data:', formData);

        try {
            const response = await axios.post(`${baseUrl}/send-email`, formData);
            console.log('Form submitted:', response.data);
            setLoading(false);
          // Reset the form after submission
        setFormData({
            date: '',
            time: '',
            name: '',
            email: '',
            people: '1'
          });
          showToast(response.data.message);
            // Reset form fields or perform other actions upon successful form submission
          } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, show error messages, etc.
          }
        setDateSelected(false);
      };

    const [dateSelected, setDateSelected] = useState(false);

    const handleDateChange = (e) => {
    handleChange(e);
    setDateSelected(true);
    };

    //toast
    const showToast = (message) => {
        console.log("message",message);
        toast.success(message); 
      };
  return (
    <>
    {
        loading && <Loader />
    }

    <div className='book-a-table-container'>
        <div>
        <Toaster position="top-center" /> 
        </div>
        <div className="title">Book A Table</div>
        <div className="subtitle">Join us for an unforgettable dining experience. From exquisite cuisine to a warm ambiance, indulge in flavorful dishes crafted with care. Book your table now for a delightful meal!</div>
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="flex-row">
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleDateChange}
        min={currentDate}
        className="form-field"
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        min={"07:30" && formData.date === currentDate ? currentTime : '07:30'}
        max={"22:30"}
        className="form-field"
        required
        disabled={!dateSelected}
      />
      </div>
      <div className="flex-row">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="form-field"
        required
      />
      {/* <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        className="form-field"
        pattern="[0-9]*"
        inputMode="numeric"
        maxLength={10}
        required
      /> */}
          <input
      type="email" // Changed to email type
      name="email" // Changed name to 'email'
      value={formData.email} // Updated value and handleChange accordingly
      onChange={handleChange}
      placeholder="Email" // Changed placeholder to 'Email'
      className="form-field"
      required
    />
      </div>
      <select
        name="people"
        value={formData.people}
        onChange={handleChange}
        className="form-field select-option"
      >
        <option value="1">1 person</option>
        <option value="2">2 people</option>
        <option value="3">3 people</option>
        <option value="4">4 people</option>
        <option value="5">5 people</option>
        <option value="6">6 people</option>
        <option value="7">7 people</option>
        <option value="8">8 people</option>
      </select>
      <button type="submit" className="submit-button pointer">
        Book A Table
      </button>
    </form>
    </div>
    </>
  )
}

export default BookATable;