import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Experience } from './Experience';
import ResumeJSON from './resume.json';
import { IExperience } from './ResumeInterfaces';

const Resume = () =>
{
    return (
        <ListGroup style={{ padding: 20 }} variant="flush">
            <h2>Experience</h2>
            {(ResumeJSON.experience as IExperience[]).map(e => <Experience key={e.title} {...e} />)}
        </ListGroup>
    );
};

export default Resume;