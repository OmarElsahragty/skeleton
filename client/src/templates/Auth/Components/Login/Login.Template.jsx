import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { useFormik, FormikProvider, Form } from "formik";
import * as yup from "yup";
import {
  LabelUp,
  TextField,
  PasswordField,
  PrimaryButton,
} from "../../../../components/Atoms";

const LoginTemplate = ({ login }) => {
  const FormikHandler = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: async (data, { setSubmitting }) => {
      setSubmitting(false); // disable the button until async call
      await login({ email: data.email.trim(), ...data });
      setSubmitting(true); // enable button when async call finish
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .trim()
        .email("Invalid email address")
        .required("Required email address"),
      password: yup
        .string()
        .min(8, "Password must have at least 8 characters")
        .matches(
          /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[0-9]).*$/,
          "The password must contain at least 8 characters, 1 number, 1 lower case character, 1 upper case character"
        )
        .required("Required password"),
    }),
  });

  return (
    <Grid container item xs={12} className="px-28">
      <Grid item xs={12} className="mb-60">
        <FormikProvider value={FormikHandler}>
          <Form>
            <Grid container>
              <Grid item xs={12} className="mb-20">
                <LabelUp htmlFor="email" text="Email address" />
                <TextField
                  type="email"
                  name="email"
                  placeholder="example: rex.kautzer@mail.com"
                  id="email"
                  fullWidth
                  check
                />
              </Grid>
              <Grid item xs={12} className="mb-20">
                <LabelUp htmlFor="password" text="Password" />
                <PasswordField
                  name="password"
                  placeholder="At least 8 characters"
                  id="password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <PrimaryButton
                  fullWidth
                  text="Login"
                  type="submit"
                  disabled={
                    !FormikHandler.isValid ||
                    !FormikHandler.values.email ||
                    !FormikHandler.values.password
                  }
                />
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </Grid>
    </Grid>
  );
};

LoginTemplate.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginTemplate;
