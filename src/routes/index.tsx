import { Global } from '@emotion/react'
import { ThemeProvider } from '@mui/system'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import theme from 'styles/theme'
import AppRoutes from './app.routes'
import 'react-calendar/dist/Calendar.css'
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            '.MuiDrawer-paperAnchorBottom': {
              borderRadius: '30px 30px 0 0',
            },
          }}
        />
        <ToastContainer pauseOnHover />
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
