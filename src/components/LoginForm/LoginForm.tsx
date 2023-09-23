import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { LoginInformation } from '../../types/LoginInformation.type';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onSubmit: (data: LoginInformation) => void;
}
export const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginInformation>();

  const navigateToReg = () => {
    navigate('/auth/reg');
  };

  return (
    <Paper
      sx={{ p: 4, maxWidth: '400px' }}
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid
        container
        flexDirection={'column'}
        gap={2}
      >
        <Typography variant='h3'>Вход</Typography>

        <Controller
          name='login'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={(e) => {
                onChange(e.target.value);
              }}
              value={value}
              label='Login'
              size='small'
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={(e) => {
                onChange(e.target.value);
              }}
              value={value}
              label='Password'
              size='small'
              type='password'
            />
          )}
        />

        <Grid
          container
          justifyContent={'space-between'}
        >
          <Button
            type='submit'
            variant='contained'
          >
            Войти
          </Button>
          <Button onClick={navigateToReg}>Зарегестрироваться</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
