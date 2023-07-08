import React from 'react';
import './RegistrationPage.css';

const LabelCheckboxGroup = ({ label, options, name, selectedValues, onChange }) => (
    <div className="form-row">
      <label className="form-label">{label}</label>
      <div className="checkbox-group">
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );

  export default LabelCheckboxGroup;