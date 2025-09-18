import React from "react";
import { TextField } from "@mui/material";

const Input = ({ name, label, error, ...rest }) => {
  return (
      <TextField
          error
          id="outlined-error-helper-text"
          label={label}
          name={name}
          helperText={error}
          variant="outlined"
      />
  );
};

export default Input;
