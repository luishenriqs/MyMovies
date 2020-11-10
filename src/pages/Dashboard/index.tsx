import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/header/index';
import api from '../../services/api';
import GettingDates from '../../utils/gettingDates';
import { WorkSpace, Container, MovieContainer } from './styles';

interface Repository {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieData[];
}
interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Dashboard: React.FC = () => {
  const [repository, setRepository] = useState<Repository>({} as Repository);

  /* ***********************[API_KEY FROM TMDB]****************************** */
  const api_key = '2964b6cd71e6a379510ab626bdca951e';
  /* ************************************************************************ */

  /* *********************[Capturando últimos 30 dias]*********************** */
  const { initialDate } = GettingDates();
  const { todayDate } = GettingDates();
  /* ************************************************************************ */

  /* *****************[MOST POPULAR OF THE LAST 30 DAYS]********************* */
  useEffect(() => {
    api
      .get(
        `/discover/movie?api_key=${api_key}&primary_release_date.gte=${initialDate}&primary_release_date.lte=${todayDate}&language=pt-BR&sort_by=popularity.desc`,
      )
      .then(response => {
        setRepository(response.data);
      });
  }, [initialDate, todayDate]);

  const { results } = repository;

  /* ************************************************************************ */
  return (
    <>
      <Header />
      <WorkSpace>
        <Container>
          <h1>Os mais populares do mês</h1>
          <MovieContainer>
            {results ? (
              results.map(movie => (
                <div className="box" key={movie.id}>
                  <Link to={`/movie/:${movie.poster_path}`}>
                    <img
                      src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <strong>{movie.title}</strong>
                  </Link>
                </div>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </MovieContainer>
        </Container>
      </WorkSpace>
    </>
  );
};

export default Dashboard;
