import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { LoginInformation } from '../../types/LoginInformation.type';
import { useNavigate } from 'react-router-dom';

interface RegFormProps {
  onSubmit: (data: LoginInformation) => void;
}
export const RegForm: FC<RegFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginInformation>();

  const navigateToLogin = () => {
    navigate('/');
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
        <Typography variant='h3'>Регистрация</Typography>

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
            Зарегестрироваться
          </Button>
          <Button onClick={navigateToLogin}>Войти</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
