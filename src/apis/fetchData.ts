import { User, Album, UsersAlbums } from "../interfaces"

type FetchApi = () => Promise<UsersAlbums[]>

const fetchApi:FetchApi = async () => {
    const urlBase = 'https://jsonplaceholder.typicode.com/';

    const [userData, albumsData ]: [User[], Album[]] = await Promise.all([
        fetch(urlBase + 'users'),
        fetch(urlBase + 'albums')
    ]).then((responses) => Promise.all(responses.map((response) => response.json())))
    .catch(console.error) as any;

    const users:UsersAlbums[] =  userData.map((user) => ({
        id: user.id,
        username: user.username,
        albums: albumsData.filter((album) => album.userId === user.id)
    }));
    
    return users;
}

export { fetchApi };