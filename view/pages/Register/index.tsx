import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import Input from '../../components/Input';
import AuthLayout from '../../components/layouts/AuhLayout';
import Link from '../../components/Link';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const isPasswordsDifferents =
    password && repeatPassword && password !== repeatPassword;

  const isSubmitDisabled =
    !email ||
    !password ||
    !repeatPassword ||
    isPasswordsDifferents ||
    !isEmailValid;

  const handleEmailChange = (value) => {
    setEmail(value);

    // Validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  return (
    <AuthLayout
      actionUrl="/register"
      title="Welcome to Oauther"
      subtitle="Please register"
    >
      <Grid item xs={12}>
        <Input
          label="Email"
          name="email"
          setValue={handleEmailChange}
          errorMessage={!isEmailValid && 'Must be a valid email'}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          label="Password"
          type="password"
          name="password"
          setValue={setPassword}
          errorMessage={isPasswordsDifferents && 'Passwords must be equal'}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          label="Repeat password"
          type="password"
          setValue={setRepeatPassword}
          errorMessage={isPasswordsDifferents && 'Passwords must be equal'}
        />
      </Grid>

      <Grid item xs={12} container justifyContent="center">
        <Button type="submit" variant="contained" disabled={isSubmitDisabled}>
          Register
        </Button>
      </Grid>

      <Grid item xs={12} container justifyContent="center">
        <Link href="/admin/login">Login</Link>
      </Grid>
    </AuthLayout>
  );
};

export default Register;
