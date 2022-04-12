import React, { VFC } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Album } from "../../interfaces";

const AlbumList: VFC<{ albums: Album[] }> = ({ albums }) => (
    <>
        { albums.map(album => (
            <>
                <ListGroup.Item>{album.title} <Button variant="primary" size="sm">Voir</Button></ListGroup.Item>
            </>
        )) }
    </>
)

export default AlbumList;