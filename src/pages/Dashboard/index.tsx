import React, { useEffect, useState } from 'react';
import Header from '../../components/header/index';
import api from '../../services/api';
import GettingDates from '../../utils/gettingDates';

interface Repository {
  title: string;
  overview: string;
  poster_path: string;
  original_language: string;
}

const Dashboard: React.FC = () => {
  const [repository, setRepository] = useState<Repository[]>([]);

  /* ****************************[API_KEY]*********************************** */
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
  }, []);

  const repositoryObj = Object.values(repository);
  const movies = Object.values(repositoryObj[3]);
  console.log(movies[1]);
  console.log(movies[1].title);
  /* ************************************************************************ */
  return (
    <>
      <Header />
      <h1>{movies[1].title}</h1>
      <h1>{movies[1].overview}</h1>
      <h1>{movies[1].release_date}</h1>
    </>
  );
};
export default Dashboard;
