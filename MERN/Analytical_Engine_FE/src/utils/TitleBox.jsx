import { Box } from '@mui/material'
import { styled } from '@mui/system'

const TitleBox = styled(Box)({
  fontSize: '3.5rem',
  textTransform: 'uppercase',
  transition: 'all 0.3s',
  backgroundImage: 'linear-gradient(to right, #1ea06f, #20ff85)',
  backgroundClip: 'text',
  display: 'inline-block',
  letterSpacing: '2px',
  color: 'transparent',
  textAlign: 'center',
  alignContent: 'center',
  borderRadius: '10px',
  '&:hover': {
    transform: 'scale(1.2)',
    textShadow: '0.5rem 0.1rem 2rem rgba(0, 0, 0, 0.2)',
  },
})

export default TitleBox
