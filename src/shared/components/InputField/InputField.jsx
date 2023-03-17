import { nanoid } from 'nanoid';
import { useMemo } from 'react';

import { TextField } from '@mui/material';

const InputField = ({ label, handleChange, ...otherProps }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <>
      <label htmlFor={id}>
        <TextField
          sx={{ width: '100%', padding: '10px 0' }}
          label={label}
          variant="standard"
          id={id}
          onChange={handleChange}
          {...otherProps}
        />
      </label>
    </>
  );
};

export default InputField;
