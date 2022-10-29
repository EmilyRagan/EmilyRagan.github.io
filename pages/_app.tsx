import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { Nav, Navbar } from 'react-bootstrap';
import './index.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div style={{ alignItems: 'stretch', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Navbar bg='dark' sticky='top' variant='dark'>
                <Navbar.Brand>Emily Ragan</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='/'>Resume</Nav.Link>
                    <Nav.Link href='/seniorproject'>Senior Project</Nav.Link>
                    <Nav.Link href='https://www.linkedin.com/in/emilylynnragan/'>
                        <Image alt="LinkedIn icon" src='/images/svgs/linkedin.svg' width={24} height={24} />
                    </Nav.Link>
                    <Nav.Link href='https://github.com/EmilyRagan'>
                        <Image alt="GitHub icon" src="/images/svgs/github.svg" width={24} height={24} />
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
