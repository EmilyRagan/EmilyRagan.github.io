import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Nav, Navbar } from 'react-bootstrap';
import './index.css';
import { Github, Linkedin } from 'react-bootstrap-icons';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div style={{ alignItems: 'stretch', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Navbar bg='dark' sticky='top' variant='dark'>
                <Navbar.Brand>Emily Ragan</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='/'>Resume</Nav.Link>
                    <Nav.Link href='/seniorproject'>Senior Project</Nav.Link>
                    <Nav.Link href='https://www.linkedin.com/in/emilylynnragan/'>
                        <Linkedin />
                    </Nav.Link>
                    <Nav.Link href='https://github.com/EmilyRagan'>
                        <Github />
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
