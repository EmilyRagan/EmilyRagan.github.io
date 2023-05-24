import Link from 'next/link';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Apple, GooglePlay } from 'react-bootstrap-icons';
import { Experience } from './Experience';
import { IExperience } from './ResumeInterfaces';
import ResumeJSON from './resume.json';

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
                <Col xs={3}>
                    <Card>
                        <Card.Body>
                            <Card.Text>The PA AIS Field Guide is a mobile app that helps with education and reporting of aquatic invasive species in Pennsylvania</Card.Text>
                            <Link href='https://apps.apple.com/us/app/pa-ais/id1448504422' title='App Store' >
                                <Apple height={24} width={24} />
                            </Link>
                            <Link href='https://play.google.com/store/apps/details?id=us.skywardapps.seagrant&hl=en_US&pli=1' title='Play Store'>
                                <GooglePlay height={24} width={24} />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Resume;