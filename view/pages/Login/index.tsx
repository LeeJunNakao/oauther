import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import Input from '../../components/Input';
import AuthLayout from '../../components/layouts/AuhLayout';
import Link from '../../components/Link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthLayout
      actionUrl="/admin/login"
      title="Welcome to Oauther"
      subtitle="Please authenticate"
    >
      <Grid item xs={12}>
        <Input label="Email" name="email" setValue={setEmail} />
      </Grid>
      <Grid item xs={12}>
        <Input
          label="Password"
          type="password"
          name="password"
          setValue={setPassword}
        />
      </Grid>

      <Grid item xs={12} container justifyContent="center">
        <Button
          type="submit"
          variant="contained"
          disabled={!email || !password}
        >
          Login
        </Button>
      </Grid>

      <Grid item xs={12} container justifyContent="center">
        <Link href="/admin/register">Register</Link>
      </Grid>
    </AuthLayout>
  );
};

export default Login;
