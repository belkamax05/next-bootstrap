import { MoviesDetailedItemData } from '@/types';
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import { StyledBackground, StyledBackLink, StyledContent, StyledRoot } from './styled';

const MoviesDetailedItem = ({ item }: { item: MoviesDetailedItemData }) => {
  const {
    image,
    title,
    original_title,
    movie_banner,
    description,
    rt_score,
    release_date,
    director,
    producer,
    ...restItem
  } = item;
  const longTitle = `${title} (${original_title})`;
  return (
    <StyledRoot>
      <StyledBackground backgroundImage={movie_banner} />
      <StyledContent>
        <StyledBackLink href="/movies">Back to list</StyledBackLink>
        <Image src={image} alt={title} width={200} height={300} />
        <strong>{longTitle}</strong>
        <Rating
          name="half-rating-read"
          defaultValue={parseInt(rt_score) / 20}
          precision={0.2}
          readOnly
        />
        <p>{description}</p>
        <p>Release date: {release_date}</p>
        <p>Director: {director}</p>
        <p>Producer: {producer}</p>
        <pre>{JSON.stringify(restItem, null, 2)}</pre>
      </StyledContent>
    </StyledRoot>
  );
};

export default MoviesDetailedItem;
