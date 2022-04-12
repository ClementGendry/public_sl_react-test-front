import { Album } from "./album"
export type UsersAlbums = {
	id: number
	username: string
	albums: Album[]
}