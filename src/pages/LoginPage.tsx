import { Backdrop } from '@mui/material';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { useAuth } from '../contexts/auth/auth.context';
import { LoginInformation } from '../types/LoginInformation.type';

export const LoginPage = () => {
  const { isLoadingAuth, login } = useAuth();

  const submit = (data: LoginInformation) => {
    login(data);
  };

  return (
    <>
      <LoginForm onSubmit={submit} />
      <Backdrop open={isLoadingAuth} />
    </>
  );
};
