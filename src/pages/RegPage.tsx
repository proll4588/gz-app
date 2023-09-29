import { Backdrop } from '@mui/material';
import { RegForm } from '../components/RegForm/RegForm';
import { useAuth } from '../contexts/auth/auth.context';
import { LoginInformation } from '../types/LoginInformation.type';

export const RegPage = () => {
  const { reg, isLoadingAuth } = useAuth();

  const submit = (data: LoginInformation) => {
    reg(data);
  };

  return (
    <>
      <RegForm onSubmit={submit} />
      <Backdrop open={isLoadingAuth} />
    </>
  );
};
