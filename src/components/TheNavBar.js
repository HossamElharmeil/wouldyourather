import { Navbar, Nav } from 'react-bootstrap'

const TheNavBar = () => {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new">New Question</Nav.Link>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
        </Nav>
    </Navbar>
}

export default TheNavBar