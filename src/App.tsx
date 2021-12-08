import React from "react"
import AppContext from "./contexts/AppContext"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./themes/defaultTheme"
import { AppRouteWrapper } from "./routes"

function App(): React.ReactElement {
  return (
    <AppContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <AppRouteWrapper />
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App
