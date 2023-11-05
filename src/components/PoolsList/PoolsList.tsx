import dayjs, { Dayjs } from 'dayjs';
import { ID } from '../../types/GeneralTypes';
import { FC, ReactNode } from 'react';
import { Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

export interface Pool {
  id: ID;
  isComplite: boolean;
  month: Dayjs;
}
export interface PoolsListProps {
  pools: Pool[];
}
export const PoolsList: FC<PoolsListProps> = ({ pools }) => {
  return (
    <Stack
      gap={1}
      p={1}
    >
      {pools.map((pool) => (
        <PoolCard
          key={pool.id}
          pool={pool}
          getActions={() => (
            <>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
            </>
          )}
        />
      ))}
    </Stack>
  );
};

export interface PoolCardProps {
  pool: Pool;
  getActions?: (pool: Pool) => ReactNode;
}
export const PoolCard: FC<PoolCardProps> = ({ pool, getActions }) => {
  const currentDate = dayjs(new Date());
  const isCurrentMonthCard =
    currentDate.get('month') === pool.month.get('month') &&
    currentDate.get('year') === pool.month.get('year');

  return (
    <Paper
      sx={{ p: 1 }}
      variant={isCurrentMonthCard ? 'elevation' : 'outlined'}
      elevation={4}
    >
      <Grid
        container
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography>{pool.month.format('YYYY MMMM')}</Typography>
        <Grid>{getActions && getActions(pool)}</Grid>
      </Grid>
    </Paper>
  );
};
