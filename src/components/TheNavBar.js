import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TheNavBar = () => {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">W Y R</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/new' className='nav-link'>New Question</Link>
            <Link to='/leaderboard' className='nav-link'>Leaderboard</Link>
        </Nav>
    </Navbar>
}

export default TheNavBar