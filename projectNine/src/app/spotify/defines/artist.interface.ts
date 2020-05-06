import { IAlbum } from './album.interface'


export interface IArtist {
	id: number;
	name: string;
	genres: any;
	albums: IAlbum[];
}