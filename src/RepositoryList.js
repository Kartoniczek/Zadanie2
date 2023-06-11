import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/Kartoniczek/repos'
        );
        setRepositories(response.data);
        setLoading(false);
      } catch (error) {
        setError('Wystąpił błąd podczas pobierania danych.');
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (loading) {
    return <p>Ładowanie...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista repozytoriów</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
