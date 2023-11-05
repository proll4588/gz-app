import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ID } from '../types/GeneralTypes';
import { Add } from '@mui/icons-material';

export const Main = () => {
  return (
    <Grid
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
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
