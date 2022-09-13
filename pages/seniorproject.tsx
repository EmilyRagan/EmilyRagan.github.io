import { Container } from 'react-bootstrap';

const SeniorProject = () =>
{
    return (
        <Container fluid className="d-flex flex-grow-1 g-0">
            <iframe className='flex-grow-1' src='/home.html' style={{ border: 0 }} />
        </Container>
    );
}

export default SeniorProject;