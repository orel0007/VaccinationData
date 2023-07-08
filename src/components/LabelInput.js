import React from 'react';
import './RegistrationPage.css';

const LabelInput = ({ label, type, name, value, onChange, required }) => (
  <div className="form-row">
    <label className="form-label">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  </div>
);

export default LabelInput;