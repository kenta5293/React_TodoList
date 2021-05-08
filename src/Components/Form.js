import React from 'react';
import './Form.scss';

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <button className="create-button" onClick={onCreate}>
        +
      </button>
    </div>
  );
};

export default Form;