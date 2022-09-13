import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './index.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div style={{ alignItems: 'stretch', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>Emily Ragan</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='/'>Resume</Nav.Link>
                    <Nav.Link href='/seniorproject'>Senior Project</Nav.Link>
                </Nav>
            </Navbar>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
