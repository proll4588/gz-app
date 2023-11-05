import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { ID } from '../types/GeneralTypes';
import { Add } from '@mui/icons-material';
import { CreatePoolDialog } from '../components/CreatePoolDialog/CreatePoolDialog';

const useViewDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, open, close };
};

export const Main = () => {
  const { close, isOpen, open } = useViewDialog();

  return (
    <Grid
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <CreatePoolDialog
        isOpen={isOpen}
        onClose={close}
      />
      <Paper
        square
        sx={{
          height: '50px',
          px: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant='contained'
          startIcon={<Add />}
          onClick={open}
        >
          Создать пул
        </Button>
      </Paper>
    </Grid>
  );
};

interface Pool {
  id: ID;
  title: string;
  isComplite: boolean;
  taskCount: number;
}

export interface PoolListProps {
  pools: Pool[];
}
export const PoolList: FC<PoolListProps> = ({ pools }) => {
  return (
    <Stack gap={1}>
      {pools.map((pool) => (
        <PoolItem
          key={pool.id}
          pool={pool}
        />
      ))}
    </Stack>
  );
};

export interface PoolItemProps {
  pool: Pool;
}
export const PoolItem: FC<PoolItemProps> = ({ pool }) => {
  return (
    <Paper>
      <Typography>{pool.title}</Typography>
    </Paper>
  );
};
