import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import styles from './MovieDetails.module.css';
import Rating from '../../components/Rating/Rating';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import NavBar from '../../components/NavBar/NavBar';

const categoriesArray = ['Movie', 'Adventure', 'Comedy', 'Family'];

type MovieType = {
  title: string;
  genres: {
    name: string;
  }[];
  poster_path: string | null;
  vote_average: number;
  tagline: string | null;
};

function MovieDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieType>();
  console.log(movie);

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((respone) => respone.json())
      .then((movie) => setMovie(movie));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton></BackButton>
      </header>
      <main className={styles.main}>
        <div className={styles.MovieTrailer}>
          <p>{}</p>
          <NavigationGenre categories={categoriesArray} />
        </div>
        <Rating value={4} />
        <p className={styles.movieDescription}>
          Having spent most of her life exploring the jungle, nothing could
          prepare Dora for her most dangerous adventure yet — high school.
        </p>
        <Button>Watch now</Button>
        <div>
          <p className={styles.artistCardTitle}>Cast</p>
          <div className={styles.artistCards}>
            <ArtistCard
              imgSrc={'./michaelPena.png'}
              artistName="Michael Peña"
            />
            <ArtistCard
              imgSrc={'./michaelPena.png'}
              artistName="Michael Peña"
            />
            <ArtistCard
              imgSrc={'./michaelPena.png'}
              artistName="Michael Peña"
            />
            <ArtistCard
              imgSrc={'./michaelPena.png'}
              artistName="Michael Peña"
            />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <NavBar />
      </footer>
    </div>
  );
}

export default MovieDetails;
