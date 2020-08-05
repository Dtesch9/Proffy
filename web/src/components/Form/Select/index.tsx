import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

type OptionsShape = {
  value: string;
  label: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<OptionsShape>;
}

const Select: React.FC<SelectProps> = props => {
  const { name, label, options, ...rest } = props;

  return (
    <div className="select-block">
      <label htmlFor={name}>
        {label}
        <select defaultValue="" id={name} {...rest}>
          <option value="" disabled hidden>
            Selecione uma opção
          </option>

          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
