import React, { useState } from 'react';
import './RegistrationPage.css';
import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';
import LabelCheckbox from './LabelCheckbox';
import LabelCheckboxGroup from './LabelCheckboxGroup';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    city: '',
    landline: '',
    cellularPhone: '',
    hasCovidHistory: false,
    previousConditions: [],
    otherConditions: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'previousConditions') {
        handlePreviousConditionChange(value, checked);
      } else {
        handleCheckboxChange(name, checked);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleCheckboxChange = (name, checked) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };

  const handlePreviousConditionChange = (condition, checked) => {
    let previousConditions = [...formData.previousConditions];

    if (checked) {
      previousConditions = [...previousConditions, condition];
    } else {
      previousConditions = previousConditions.filter((item) => item !== condition);
    }

    setFormData((prevData) => ({
      ...prevData,
      previousConditions: previousConditions
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform any necessary validation or API calls here
  };

  const labelInputData = [
    { label: 'First Name:', type: 'text', name: 'firstName' },
    { label: 'Last Name:', type: 'text', name: 'lastName' },
    { label: 'Date of Birth:', type: 'date', name: 'dateOfBirth' },
    { label: 'Address:', type: 'text', name: 'address' },
    { label: 'Zip Code (optional):', type: 'text', name: 'zipCode' },
    { label: 'Landline:', type: 'text', name: 'landline', required: true },
    { label: 'Cellular Phone:', type: 'text', name: 'cellularPhone', required: true }
  ];

  return (
    <div className="registration-form-container">
      <h1>Registration Page</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        {labelInputData.map((data) => (
          <LabelInput
            key={data.name}
            label={data.label}
            type={data.type}
            name={data.name}
            value={formData[data.name]}
            onChange={handleInputChange}
          />
        ))}

        <LabelSelect
          label="City:"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        >
          <option value="">Select a city</option>
          <option value="City 1">City 1</option>
          <option value="City 2">City 2</option>
          {/* Add other city options */}
        </LabelSelect>

        <LabelCheckbox
          label="Have you been infected by COVID-19 before?"
          name="hasCovidHistory"
          checked={formData.hasCovidHistory}
          onChange={handleInputChange}
        />
        <LabelCheckboxGroup
          label="Previous Conditions:"
          options={[
            { value: 'Diabetes', label: 'Diabetes' },
            { value: 'Cardio-Vascular problems', label: 'Cardio-Vascular problems' },
            // Add other previous condition options
          ]}
          name="previousConditions"
          selectedValues={formData.previousConditions}
          onChange={handleInputChange}
        />
        <div className="form-row">
          <label className="form-label">
            Other Conditions:
            <input
              type="text"
              name="otherConditions"
              value={formData.otherConditions}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;