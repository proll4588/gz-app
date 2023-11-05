import { createTheme } from '@mui/material';
import { lime } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: lime,
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },

    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});
