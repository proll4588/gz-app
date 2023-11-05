import { Dialog, DialogProps } from '@mui/material';
import { FC } from 'react';
import { useDevice } from '../../../hooks/useDevice';

export const CustomDialog: FC<DialogProps> = (props) => {
  const { isMobile } = useDevice();
  return (
    <Dialog
      {...props}
      fullScreen={isMobile}
      PaperProps={{
        sx: { p: 3 },
        ...props.PaperProps,
      }}
    />
  );
};
