import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Experience } from './Experience';
import ResumeJSON from './resume.json';
import { IExperience } from './ResumeInterfaces';

const Resume = () =>
{
    return (
        <Container style={{ marginBottom: 20, marginTop: 20 }}>
            <ListGroup variant="flush">
                <h2>Experience</h2>
                {(ResumeJSON.experience as IExperience[]).map(e => <Experience key={e.title} {...e} />)}
            </ListGroup>
            <Row className="gx-2">
                <Col xs={3}>
                    <Card>
                        <Card.Img alt='3 ground antennas in different landscapes' src='https://scan-now.gsfc.nasa.gov/scanbg.7fced642a74d10ee160d.jpg' title='SCaN Now banner image' />
                        <Card.Body>
                            <Card.Text>SCaN Now is a real-time display of space communications between NASA and various spacecraft.</Card.Text>
                            <Button href='https://scan-now.gsfc.nasa.gov' variant='primary'>SCaN Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Img alt='a satellite above the earth with L9 in the background' src='https://landsat.gsfc.nasa.gov/landsat-9/interactive/assets/l9-logo.jpg' title='Landsat 9 logo' />
                        <Card.Body>
                            <Card.Text>The Landsat 9 Interactive Mission Tour is a map-based visual guide through the various aspects of creating and preparing the Landsat 9 satellite for its mission.</Card.Text>
                            <Button href='https://landsat.gsfc.nasa.gov/landsat-9/interactive/' variant='primary'>L9 Interactive</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Resume;