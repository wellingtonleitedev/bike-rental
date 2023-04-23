import { ThemeProvider } from '@mui/system'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import theme from 'styles/theme'
import AppRoutes from './app.routes'
import 'react-calendar/dist/Calendar.css'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastContainer pauseOnHover />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
