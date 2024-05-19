import { useMemo } from 'react'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from '@/theme'
import '@/App.css'
import Home from '@/components/home'
import Prediction from '@/components/prediction'
import Contacts from '@/components/dashboard/contacts'
import Contents from '@/components/dashboard/contents'
import Events from '@/components/dashboard/events'
import Organisations from '@/components/dashboard/organisations'
import Recommendations from '@/components/dashboard/recommendations'
import Users from '@/components/dashboard/users'
import YourPath from '@/components/yourPath/YourPath.jsx'
import Navbar from '@/components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/contents" element={<Contents />} />
            <Route path="/events" element={<Events />} />
            <Route path="/organisations" element={<Organisations />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/users" element={<Users />} />
            {/* <Route path="/predictions" element={<Prediction />} /> */}
            <Route path="/yourPath" element={<YourPath />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
