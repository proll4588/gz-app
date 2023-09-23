import { Outlet } from 'react-router-dom';
import { ContextLayout } from './ContextLayout';
import { useAuth } from '../contexts/auth/auth.context';
import { Backdrop, CircularProgress } from '@mui/material';

export const Layout = () => {
  return (
    <ContextLayout>
      <LayoutContainer />
    </ContextLayout>
  );
};

const LayoutContainer = () => {
  const { isAuthChecked } = useAuth();

  if (!isAuthChecked)
    return (
      <Backdrop open>
        <CircularProgress sx={{ color: 'white' }} />
      </Backdrop>
    );
  else
    return (
      <>
        <Outlet />
      </>
    );
};
