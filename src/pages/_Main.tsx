import { Grid, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ID } from '../types/GeneralTypes';

export const Main = () => {
  return <Grid>Main page</Grid>;
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
