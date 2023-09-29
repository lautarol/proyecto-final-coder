import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { NavBar } from '../components'

const MainLayout = ({children}) => {
  return (
    <>
      <NavBar />
      <main className='content' style={ {backgroundColor:'gray', minHeight:'100vh'}}>
        <Container style={ {display: 'flex', width: '100%', justifyContent: 'center'} }>
          {children}
        </Container>
      </main>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout
