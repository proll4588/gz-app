import { ReactNode } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { CreatePoolArgs } from '../../types/pool';

export interface CreatePoolFormProps {
  onSubmit: (data: CreatePoolArgs) => void;
  getActions: (
    handleSubmit: UseFormHandleSubmit<CreatePoolArgs, undefined>
  ) => ReactNode;
}
