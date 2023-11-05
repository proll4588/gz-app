import { Backdrop, BackdropProps, CircularProgress } from '@mui/material';
import { FC } from 'react';

export const CustomBackdrop: FC<BackdropProps> = (props) => {
  return (
    <Backdrop
      {...props}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
