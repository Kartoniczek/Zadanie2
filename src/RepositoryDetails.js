import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RepositoryDetails = () => {
  const { repoName } = useParams();
  const [repository, setRepository] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositoryDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${repository}/${repoName}`
        );
        setRepository(response.data);
        setLoading(false);
      } catch (error) {
        setError('Wystąpił błąd podczas pobierania danych.');
        setLoading(false);
      }
    };

    fetchRepositoryDetails();
  }, [repoName]);

  if (loading) {
    return <p>Ładowanie...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Szczegóły repozytorium: {repoName}</h1>
      {repository && (
        <ul>
          <li>Id: {repository.id}</li>
          <li>Nazwa: {repository.name}</li>
          <li>Opis: {repository.description}</li>
          <li>Liczba gwiazdek: {repository.stargazers_count}</li>
          <li>Liczba obserwujących: {repository.watchers_count}</li>
        </ul>
      )}
    </div>
  );
};

export default RepositoryDetails;
