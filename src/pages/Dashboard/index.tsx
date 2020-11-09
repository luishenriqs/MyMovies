import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/header/index';
import api from '../../services/api';
import GettingDates from '../../utils/gettingDates';
import { WorkSpace, MovieContainer } from './styles';

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

  /* ********************[Consumindo API PÚBLICA TMDB]*********************** */
  // Listagem dos filmes mais populares dos últimos 30 dias;
  useEffect(() => {
    api
      .get(
        `discover/movie?api_key=${api_key}&primary_release_date.gte=${initialDate}&primary_release_date.lte=${todayDate}&language=pt-BR&sort_by=popularity.desc`,
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
        <MovieContainer>
          {results ? (
            results.map(movie => (
              <div className="box" key={movie.id}>
                <Link to="/">
                  {/* <img
                    src={repository.owner.avatar_url}
                    alt={repository.owner.login}
                  /> */}
                  <div className="content">
                    <strong>{movie.title}</strong>
                    <p>{movie.overview}</p>
                  </div>
                  <FiChevronRight size={20} />
                </Link>
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </MovieContainer>
      </WorkSpace>
    </>
  );
};

export default Dashboard;
