import { nanoid } from 'nanoid';
import { useMemo } from 'react';

import css from './input-field.module.css';

const InputField = ({ label, handleChange, ...otherProps }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          className={css.input_field}
          id={id}
          onChange={handleChange}
          {...otherProps}
        />
      </label>
    </>
  );
};

export default InputField;
