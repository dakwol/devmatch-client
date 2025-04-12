import React, { FC, SelectHTMLAttributes } from 'react';
import './styles.scss';

type Option = {
  value: string;
  label: string;
};

type FormSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
  label: string;
  options: Option[];
  id?: string;
};

export const FormSelect: FC<FormSelectProps> = ({ label, id, options, multiple, ...props }) => {
  const selectId = id || props.name || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="formSelectWrapper">
      <label htmlFor={selectId}>{label}</label>
      <select
        id={selectId}
        className={`formSelect${multiple ? ' formSelect--multiple' : ''}`}
        multiple={multiple}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
