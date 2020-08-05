import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = props => {
  const { name, label, ...rest } = props;

  return (
    <div className="textarea-block">
      <label htmlFor={name}>
        {label}
        <textarea id={name} {...rest} />
      </label>
    </div>
  );
};

export default Textarea;
