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

const RegistrationTemplate = ({ register }) => {
  const FormikHandler = useFormik({
    initialValues: { name: "", email: "", password: "" },
    onSubmit: async (data, { setSubmitting }) => {
      setSubmitting(false); // disable the button until async call
      await register({
        name: data.name.trim(),
        email: data.email.trim(),
        ...data,
      });
      setSubmitting(true); // enable button when async call finish
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .trim()
        .min(3, "Name must have at least 3 characters")
        .max(30, "Name must have at most 30 characters")
        .matches(/^[a-zA-Z\s]*$/, "Name must be alphabetic")
        .required("Required Name"),
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
                <LabelUp htmlFor="name" text="Name" />
                <TextField
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="name"
                  fullWidth
                  check
                />
              </Grid>
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
                  text="Register"
                  type="submit"
                  disabled={
                    !FormikHandler.isValid ||
                    !FormikHandler.values.name ||
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

RegistrationTemplate.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegistrationTemplate;
