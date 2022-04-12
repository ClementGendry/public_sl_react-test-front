import React, { VFC } from "react"
import { Row, Col, ListGroup } from 'react-bootstrap';

const PlaceHolder: VFC = () => {
    return (
        <>
            <Col>
                <ListGroup>
                    <ListGroup.Item variant="dark">Title</ListGroup.Item>
                    <ListGroup.Item>-</ListGroup.Item>
                    <ListGroup.Item>-</ListGroup.Item>
                    <ListGroup.Item>-</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col>
                <ListGroup>
                    <ListGroup.Item variant="dark">Title</ListGroup.Item>
                    <ListGroup.Item>-</ListGroup.Item>
                    <ListGroup.Item>-</ListGroup.Item>
                    <ListGroup.Item>-</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col>
                <ListGroup>
                    <ListGroup.Item variant="dark">Title</ListGroup.Item>
                    <ListGroup.Item>-</ListGroup.Item>
                    <ListGroup.Item>-</ListGroup.Item>
                    <ListGroup.Item>-</ListGroup.Item>
                </ListGroup>
            </Col>
        </>
    );
}

export default PlaceHolder;