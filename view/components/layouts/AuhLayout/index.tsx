import React, { PropsWithChildren } from 'react';
import { Grid, Typography } from '@mui/material';
import '../../../reset.css';

type Props = {
  title: string;
  subtitle: string;
  actionUrl: string;
};

const AuthLayout = ({
  title,
  subtitle,
  children,
  actionUrl,
}: PropsWithChildren<Props>) => {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={3}
        p={4}
        sx={{
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: 2,
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }}
      >
        <Grid container spacing={3}>
          <Grid item container justifyContent="center">
            <Typography variant="h3">{title}</Typography>
          </Grid>

          <Grid item container justifyContent="center">
            <Typography variant="h4">{subtitle}</Typography>
          </Grid>
        </Grid>

        <form action={actionUrl} method="POST">
          <Grid container spacing={3} mt={5}>
            {children}
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
