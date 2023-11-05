import { FC } from 'react';
import { CreatePoolForm } from '../CreatePoolForm/CreatePoolForm';
import { CustomDialog } from '../base-ui/CustomDialog/CustomDialog';
import { Button, Grid } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_POOL } from '../../apollo/fetches/pool/createPool';
import { CreatePoolArgs } from '../../types/pool';
import { GET_POOL } from '../../apollo/fetches/pool/getPool';
import { CustomBackdrop } from '../base-ui/CustomBackdrop/CustomBackdrop';

interface CreatePoolDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export const CreatePoolDialog: FC<CreatePoolDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const [createPool, { loading }] = useMutation(CREATE_POOL, {
    refetchQueries: [GET_POOL],
  });

  const createPoolHandle = (data: CreatePoolArgs) => {
    createPool({
      variables: {
        month: data.month.unix(),
      },
    }).then(() => {
      onClose();
    });
  };

  return (
    <CustomDialog
      open={isOpen}
      onClose={onClose}
    >
      <CustomBackdrop open={loading} />
      <CreatePoolForm
        onSubmit={createPoolHandle}
        getActions={() => {
          return (
            <Grid>
              <Button type='submit'>Создать</Button>
              <Button onClick={onClose}>Закрыть</Button>
            </Grid>
          );
        }}
      />
    </CustomDialog>
  );
};
