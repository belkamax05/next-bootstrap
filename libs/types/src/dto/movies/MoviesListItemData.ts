import { MoviesDetailedItemData } from './MoviesDetailedItemData';

export type MoviesListItemData = Pick<MoviesDetailedItemData, 'id' | 'title' | 'image'>;
