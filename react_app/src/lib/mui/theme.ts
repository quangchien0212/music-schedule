import { ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: 'rgb(22, 119, 255)',
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: 'small',
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'unset',
        },
      },
    },
  }
}

export default theme