import { NavLink } from 'react-router-dom'
import PixIcon from '@mui/icons-material/Pix'
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/utils/FlexBetween'
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
        <div>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
        <div>
          <NavLink to="/contents">Contents</NavLink>
        </div>
        <div>
          <NavLink to="/events">Events</NavLink>
        </div>
        <div>
          <NavLink to="/organisations">Organisations</NavLink>
        </div>
        <div>
          <NavLink to="/recommendations">Recommendations</NavLink>
        </div>
        <div>
          <NavLink to="/users">Users</NavLink>
        </div>
        <div>
          <NavLink to="/predictions">Predictions</NavLink>
        </div>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar
