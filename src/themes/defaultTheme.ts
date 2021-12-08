import { createTheme } from "@mui/material/styles"
import { palette } from "./palette"
import { typography } from "./typography"

const theme = createTheme({
  palette,
  typography,
  breakpoints: {
    values: {
      xl: 1536,
      lg: 1380,
      md: 1000,
      sm: 500,
      xs: 400,
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: palette.common?.white,
        },
      },
    },
  },
})

export default theme
