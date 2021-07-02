import { Navbar, Nav } from 'react-bootstrap'

const TheNavBar = () => {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/home">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Navbar>
}

export default TheNavBar