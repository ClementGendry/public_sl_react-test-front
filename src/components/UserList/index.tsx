import React from "react";
import { ListGroup, Col } from 'react-bootstrap';
import { UsersAlbums } from '../../interfaces';

import AlbumList from "../AlbumList";

const UserList: React.VFC<{ data: UsersAlbums }> = ({ data }) => {
    const { username, albums } = data;

    return(
        <Col>
            <ListGroup>
                <ListGroup.Item variant='dark'>{username}</ListGroup.Item>
                <AlbumList albums={albums} />
            </ListGroup>
        </Col>
    );
}

export default UserList;