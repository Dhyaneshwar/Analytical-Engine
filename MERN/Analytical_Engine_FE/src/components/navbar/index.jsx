import { NavLink } from 'react-router-dom'
import PixIcon from '@mui/icons-material/Pix'
import { useMediaQuery, useTheme } from '@mui/material'
import FlexBetween from '@/utils/FlexBetween'
import './navbar.css'
import Navigation from './Navigation'

const Navbar = (props) => {
  const { palette } = useTheme()
  const isAboveMediumScreens = useMediaQuery('(min-width: 1024px)')

  return (
    <FlexBetween className="nav-links" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: '28px' }} />
        <NavLink to="/" style={{ fontSize: '26px' }}>
          Analytical Engine
        </NavLink>
      </FlexBetween>

      {isAboveMediumScreens && (
        <FlexBetween gap="2rem">
          <div>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </div>
          <div>
            <NavLink to="/contacts">Contacts</NavLink>
          </div>
          <div>
            <NavLink to="/organisations">Organisations</NavLink>
          </div>
          <div>
            <NavLink to="/users">Users</NavLink>
          </div>
          <div>
            <NavLink to="/predictions">Predictions</NavLink>
          </div>
        </FlexBetween>
      )}
      {!isAboveMediumScreens && <Navigation />}
    </FlexBetween>
  )
}

export default Navbar
