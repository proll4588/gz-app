import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Outlet />
    </Grid>
  );
};
