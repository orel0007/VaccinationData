import React from 'react';
import './RegistrationPage.css';

const LabelSelect = ({ label, name, value, onChange, required, children }) => (
    <div className="form-row">
      <label className="form-label">
        {label}
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          {children}
        </select>
      </label>
    </div>
  );

  export default LabelSelect;