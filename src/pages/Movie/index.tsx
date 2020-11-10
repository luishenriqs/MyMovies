import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { WorkSpace, MovieContainer } from './styles';

const Movie: React.FC = () => {
  const url = window.location;
  const path = url.pathname.split(':');

  const movie_poster = path[1];

  return (
    <>
      <Header />
      <WorkSpace>
        <MovieContainer>
          <Link to="/dashboard">
            <FiChevronLeft size={20} />
            <h1>Voltar</h1>
          </Link>
          <img
            src={`http://image.tmdb.org/t/p/w780/${movie_poster}`}
            alt="Poster do filme"
          />
        </MovieContainer>
      </WorkSpace>
    </>
  );
};

export default Movie;
