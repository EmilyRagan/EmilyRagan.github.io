import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Nav, Navbar } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';
import './index.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div style={{ alignItems: 'stretch', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Navbar bg='dark' sticky='top' variant='dark'>
                <Navbar.Brand>Emily Ragan</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Item>
                        <Nav.Link href='/'>Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/seniorproject'>Senior Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='https://www.linkedin.com/in/emilylynnragan/'>
                            <Linkedin />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='https://github.com/EmilyRagan'>
                            <Github />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
