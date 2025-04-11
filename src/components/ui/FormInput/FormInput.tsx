import React, { FC, InputHTMLAttributes } from 'react';
import './styles.scss';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id?: string;
};

export const FormInput: FC<FormInputProps> = ({ label, id, ...inputProps }) => {
  const inputId = id || inputProps.name || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="formInputWrapper">
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} className="formInput" {...inputProps} maxLength={200}/>
    </div>
  );
};
