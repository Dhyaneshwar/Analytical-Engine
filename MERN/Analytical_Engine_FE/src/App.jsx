import { useMemo } from 'react'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from '@/theme'
import '@/App.css'
import Home from '@/components/home'
import Prediction from '@/components/prediction'
import Contacts from '@/components/dashboard/contacts'
import Organisations from '@/components/dashboard/organisations'
import Users from '@/components/dashboard/users'
import TestPath from '@/components/testPath/TestPath.jsx'
import Navbar from '@/components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './components/dashboard'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/organisations" element={<Organisations />} />
            <Route path="/users" element={<Users />} />
            <Route path="/predictions" element={<Prediction />} />
            {/* <Route path="/testPath" element={<TestPath />} /> */}
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
