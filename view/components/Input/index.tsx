import React from 'react';
import { Typography } from '@mui/material';
import './styles.css';

type Props = {
  label?: string;
  type?: string;
  name?: string;
  setValue?: (v: string) => void;
  errorMessage?: string;
};

const Input = (props: Props) => {
  const { label, setValue, errorMessage, ...restProps } = props;

  return (
    <div className="input-component">
      <div className="input-wrapper">
        {label && (
          <span className="input-label">
            <Typography>{label}</Typography>
          </span>
        )}

        <input
          {...restProps}
          onChange={(e) => {
            if (setValue) setValue(e.target.value);
          }}
        />
      </div>

      {errorMessage && (
        <span className="error-message">
          <Typography>{errorMessage}</Typography>
        </span>
      )}
    </div>
  );
};

export default Input;
