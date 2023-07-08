import React from 'react';
import './RegistrationPage.css';

const LabelCheckbox = ({ label, name, checked, onChange }) => (
    <div className="form-row">
      <label className="form-label">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );

  export default LabelCheckbox;