import React from "react";
import { PropTypes } from "prop-types";
import { TextField, InputAdornment } from "@material-ui/core";
import { Close, Done } from "@material-ui/icons";
import { useField } from "formik";

const TextFieldInput = ({
  check,
  label = null,
  className = "",
  placeholder = "",
  StartAdornment = null,
  EndAdornment = null,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorText = check && meta.touched && meta.error ? meta.error : "";

  const checkAdornment = meta.error ? (
    <Close style={{ color: "var(--danger)" }} />
  ) : (
    <Done style={{ color: "var(--success)" }} />
  );

  return (
    <TextField
      {...field}
      label={label}
      placeholder={placeholder}
      error={!!errorText}
      helperText={errorText}
      variant="outlined"
      className={className}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <>{StartAdornment}</>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <>
              {EndAdornment}
              {check && meta.touched ? checkAdornment : null}
            </>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

TextFieldInput.propTypes = {
  type: PropTypes.string,
  check: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,

  placeholder: PropTypes.string,

  StartAdornment: PropTypes.element,
  EndAdornment: PropTypes.element,
};
export default TextFieldInput;
