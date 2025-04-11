import React, { FC, ReactNode } from 'react';
import './styles.scss';

interface FormGroupProps {
  label: string;
  children: ReactNode;
}

export const FormGroup: FC<FormGroupProps> = ({ label, children }) => (
  <div className="formGroup">
    <label className="formGroup__label">{label}</label>
    {children}
  </div>
);