import { Box, Grid, TextField, Typography, Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "../styles/css/Contact.css";
import { createAPIEndpoint, ENDPOINTS } from "../api/API";

export function Contact() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // We use Yup schema validation library for Form validation rules
  const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required("FirstName is required"),
    LastName: Yup.string().required("LastName is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    PhoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").test('len', 'Must be exactly 10 characters', val => val.length === 10),
  });

  // Then we pass the rules to the React Hook Form useForm() function using yupResolver() function from react-hook-form/resolvers library.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // When the form is valid and submitted, onSubmit() method is called and the form data will show in console
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    createAPIEndpoint(ENDPOINTS.Contacts)
      .post(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-details">
      <Box px={3} py={2} align="center">
        <h1>Contact</h1>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="FirstName"
            name="FirstName"
            label="First Name"
            fullWidth
            margin="dense"
            {...register("FirstName")}
            error={errors.FirstName ? true : false}
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.FirstName?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="LastName"
            name="LastName"
            label="Last Name"
            fullWidth
            margin="dense"
            {...register("LastName")}
            error={errors.LastName ? true : false}
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.LastName?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            margin="dense"
            {...register("email")}
            error={errors.email ? true : false}
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.email?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="PhoneNumber"
            name="PhoneNumber"
            label="Phone Number"
            fullWidth
            margin="dense"
            {...register("PhoneNumber")}
            error={errors.PhoneNumber ? true : false}
            //inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.PhoneNumber?.message}
          </Typography>
        </Grid>
        <Box mt={3}>
          <Button
            variant="contained"
            color="black"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Contact;
