import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SearchControl from '../components/SearchControl';

import { search_movies } from '../services';

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState({});

  const handleSearchClick = async () => {
    await search_movies(query, setMovies);
  }

  return (
    <>
      <Header title="Home" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <SearchControl
              query={query}
              setQuery={setQuery}
              handleSearchClick={handleSearchClick}
            />
            <div className="flex flex-wrap border-4 border-dashed border-gray-200 rounded-lg p-4 text-center text-gray-400">
              {
                movies.map((movie) => (
                  <div key={movie.imdbID} className='rounded-lg w-full md:w-1/4 p-2'>
                    {
                      <>
                        <img
                          alt={movie.Title}
                          src={movie.Poster}
                          className='w-full min-h-96'
                        />
                        <h3 className='font-bold text-md'>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        <p>{movie.Type}</p>
                      </>
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
