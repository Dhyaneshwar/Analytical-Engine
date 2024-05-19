import { NavLink } from 'react-router-dom'
import PixIcon from '@mui/icons-material/Pix'
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/utils/FlexBetween'
import './navbar.css'
import { connect } from 'react-redux'
import { getContactsRequestAction } from '@/redux/actions/contactsAction'
import { getContactsSelector } from '@/redux/selectors/contactsSelector'

const Navbar = (props) => {
  const { palette } = useTheme()

  const getContactsHandler = async () => {
    try {
      const { getContactsRequest } = props
      await getContactsRequest()
    } catch (err) {
      console.log(err)
    }
  }

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
          <NavLink to="/contacts" onClick={getContactsHandler}>
            Contacts
          </NavLink>
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

const mapStateToProps = (state) => {
  return {
    getContacts: getContactsSelector(state),
  }
}

const mapDispatchToProps = {
  getContactsRequest: getContactsRequestAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
