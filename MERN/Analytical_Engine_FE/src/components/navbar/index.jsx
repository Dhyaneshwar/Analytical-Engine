import { NavLink } from 'react-router-dom'
import PixIcon from '@mui/icons-material/Pix'
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'
import './navbar.css'

const Navbar = (props) => {
  const { palette } = useTheme()
  return (
    <FlexBetween className="nav-links" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: '28px' }} />
        <NavLink to="/" style={{ fontSize: '26px' }}>
          Analytical Engine
        </NavLink>
      </FlexBetween>

      <FlexBetween gap="2rem">
        <Box sx={{ '&:hover': { color: palette.secondary.main } }}>
          <NavLink to="/contacts">Contacts</NavLink>
        </Box>
        <Box sx={{ '&:hover': { color: palette.secondary.main } }}>
          <NavLink to="/contents">Contents</NavLink>
        </Box>
        <Box sx={{ '&:hover': { color: palette.secondary.main } }}>
          <NavLink to="/events">Events</NavLink>
        </Box>
        <Box sx={{ '&:hover': { color: palette.secondary.main } }}>
          <NavLink to="/organisations">Organisations</NavLink>
        </Box>
        <Box sx={{ '&:hover': { color: palette.secondary.main } }}>
          <NavLink to="/recommendations">Recommendations</NavLink>
        </Box>
        <Box sx={{ '&:hover': { color: palette.secondary.main } }}>
          <NavLink to="/users">Users</NavLink>
        </Box>
        <Box sx={{ '&:hover': { color: palette.secondary.main } }}>
          <NavLink to="/predictions">Predictions</NavLink>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar
