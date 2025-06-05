'use server';
import { MoviesListItemData } from '@/types';
import Image from 'next/image';
import { StyledRoot } from './styled';

const MoviesListItem = ({ item }: { item: MoviesListItemData }) => {
  return (
    <StyledRoot href={`/movies/${item.id}`}>
      <Image src={item.image} alt={item.title} width={200} height={300} />
      <strong>{item.title}</strong>
    </StyledRoot>
  );
};

export default MoviesListItem;
