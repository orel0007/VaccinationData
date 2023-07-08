import React from 'react';


const NewLabel = (props) => {
      // Handle form field changes
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log("name, value, type, checked");
        console.log(name, value, type, checked);
    
        const fieldValue = type === 'checkbox' ? checked : value;
    
        setFormData((prevData) => ({
          ...prevData,
          [name]: fieldValue
        }));
      };
  return (
    <label className="form-label">
            First Name:
            <input
              type="text"
              name={props.name}
              value={props.value}
              onChange={handleInputChange}
              required
            />
    </label>
  );
};

export default NewLabel;


/*
import React, { useState } from 'react';

import './RegistrationPage.css'
import './NewLabel'

const RegistrationPage = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  }); 
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle backend hereeeeee
    // Perform any necessary validation or API calls here
    console.log(formData);
  };

  return (
    <div className="registration-form-container">
      <h1>Registration Page</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <NewLabel
              name="firstName"
              value={formData.firstName}
          />
          <NewLabel
              name="lastName"
              value={formData.lastName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;*/