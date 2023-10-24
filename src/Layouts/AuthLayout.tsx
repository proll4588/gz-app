import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';

export const AuthLayout = () => {
  // const navigate = useNavigate();
  // const { location } = useNavigation();
  // useEffect(() => {
  //   console.log(location);
  //   // navigate('/');
  // }, [location]);

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
