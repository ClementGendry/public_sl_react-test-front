import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Button, Row } from 'react-bootstrap';
import { User, UsersAlbums } from "./interfaces";
import { fetchApi } from './apis/fetchData';

import PlaceHolder from './components/PlaceHolder';
import UserList from './components/UserList';


const App: React.FC<{}> = () => {
  const [buttonText, setButtonText] = useState('charger les albums');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UsersAlbums[]>([]);

  const handleClick = async () => {
    const usersAlbumList = await fetchApi();
    setData(usersAlbumList)
    setLoading(true);
    setButtonText('albums chargés !');
  }

  return <main className="main">
    <Jumbotron fluid>
      <Container fluid="md">
        <h1 className="mb-5">Keep calm, take a deep breath...</h1>
        <Button variant="success" onClick={handleClick}>{buttonText}</Button>
      </Container>
    </Jumbotron>
    <Container fluid="md">
      <Row>
        {
          !loading ? <PlaceHolder /> : 
          data.map((userData) => (
              <UserList data={userData} />
          ))
        }
      </Row>
    </Container>
  </main>
}

export default App;
