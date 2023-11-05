import { Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CreatePoolFormProps } from './type';
import { CreatePoolArgs } from '../../types/pool';
import dayjs from 'dayjs';

export const CreatePoolForm: FC<CreatePoolFormProps> = ({
  onSubmit,
  getActions,
}) => {
  const { control, handleSubmit } = useForm<CreatePoolArgs>({
    defaultValues: {
      month: dayjs(new Date()),
    },
  });

  return (
    <Grid
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name='month'
        rules={{ required: true }}
        render={({ field: { value, onChange }, fieldState: { invalid } }) => (
          <DatePicker
            value={value}
            onChange={onChange}
            views={['month', 'year']}
            openTo='month'
            slotProps={{
              textField: {
                error: invalid,
                required: true,
                label: 'Месяц',
                placeholder: 'Выбертите месяц',
              },
            }}
          />
        )}
      />
      {getActions(handleSubmit)}
    </Grid>
  );
};
