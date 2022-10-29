import { ListGroup } from 'react-bootstrap';
import { IExperience } from './ResumeInterfaces';

export const Experience = (props: IExperience) =>
{
    return (
        <ListGroup.Item style={{ backgroundColor: 'inherit' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>{props.title}</h3>
                <h4>{props.dates}</h4>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>{props.employer}</h4>
                <h4>{props.location}</h4>
            </div>
            <ListGroup variant="flush">
                {props.bullets.map(b => <ListGroup.Item key={b} style={{ backgroundColor: 'inherit' }}>{b}</ListGroup.Item>)}
            </ListGroup>
        </ListGroup.Item>
    );
};
