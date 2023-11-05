import {
  AppBar,
  Button,
  Grid,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { ID } from '../types/GeneralTypes';
import { Add } from '@mui/icons-material';
import { CreatePoolDialog } from '../components/CreatePoolDialog/CreatePoolDialog';
import { useViewDialog } from '../hooks/useViewDialog';
import { useQuery } from '@apollo/client';
import { GET_POOL, GetPoolResponse } from '../apollo/fetches/pool/getPool';
import { Pool, PoolsList } from '../components/PoolsList/PoolsList';
import dayjs from 'dayjs';
import { CustomBackdrop } from '../components/base-ui/CustomBackdrop/CustomBackdrop';

export const Main = () => {
  const { data, loading } = useQuery<GetPoolResponse>(GET_POOL);
  const { close, isOpen, open } = useViewDialog();

  const convertedPools =
    data !== undefined
      ? data.getPool.map((pool) => ({
          ...pool,
          month: dayjs(pool.month * 1000),
        }))
      : [];

  return (
    <Grid
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
      }}
    >
      <CreatePoolDialog
        isOpen={isOpen}
        onClose={close}
      />
      <CustomBackdrop open={loading} />
      <AppBar
        color='inherit'
        position='static'
      >
        <Toolbar>
          <Button
            startIcon={<Add />}
            onClick={open}
          >
            Создать пул
          </Button>
        </Toolbar>
      </AppBar>
      <PoolsList pools={convertedPools} />
    </Grid>
  );
};
