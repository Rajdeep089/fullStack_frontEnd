import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Sign-up successful");
      } else {
        console.error("Sign-up failed");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <Container>
      <Typography
        variant="h5"
        component="h2"
        align="center"
        sx={{ mb: 2 }}
        style={{
          color: "blue",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              placeholder="Username"
              fullWidth={true}
              margin="normal"
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: "This field is required", pattern: /^\S+@\S+$/i }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={
                errors.email?.type === "pattern"
                  ? "Invalid email address"
                  : errors.email?.message
              }
            />
          )}
        />
        <Controller
          name="password"
          disabled={!!errors.password}
          control={control}
          defaultValue=""
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          disabled={!!errors.confirmPassword}
          control={control}
          defaultValue=""
          rules={{
            required: "This field is required",
            validate: (value) =>
              value === control.getValues("password") ||
              "Passwords do not match",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirm Password"
              type="password"
              fullWidth={true}
              margin="normal"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
