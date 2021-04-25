import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';

function card(props){
    return(
        <Card style={{width:'20rem'}}>
            <Card.Body>
                <Card.Title>{props.sampleName}</Card.Title>
                <Card.Text> {props.sampleText}</Card.Text>
                <Button variant="primary">Go to a page</Button>
            </Card.Body>
        </Card>

    );
}
export default card;
