import React from 'react';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string };
export const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => (
  <label className="input"><span>{label}</span><input {...props} /></label>
);

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & { label: string } & { options: { label: string; value: string }[] };
export const Select: React.FC<SelectProps> = ({ label, options, ...props }) => (
  <label className="input"><span>{label}</span>
    <select {...props}>
      {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
    </select>
  </label>
);
