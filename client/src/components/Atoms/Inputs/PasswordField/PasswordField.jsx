import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useField } from "formik";

const PasswordFieldInput = ({
  label = null,
  className = "",
  placeholder = "",
  ...props
}) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const errorText = meta.touched && meta.error ? meta.error : "";

  return (
    <TextField
      {...field}
      label={label}
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      error={!!errorText}
      helperText={errorText}
      variant="outlined"
      className={className}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

PasswordFieldInput.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,

  placeholder: PropTypes.string,
};
export default PasswordFieldInput;
