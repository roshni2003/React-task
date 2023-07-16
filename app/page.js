"use client";
import Header from './Header';
import Movie_row from './Movie_row';
import Form from './Form_add';
import Next from './Footer';
import { movie_list } from './movie_data';
import React, { useState } from 'react';

const Page = () => {
  const [movies, setMovies] = useState(movie_list);

  const handleDeleteMovie = (movieId) => {
    const newMovieList = movies.filter((movie) => movie.id !== movieId);
    setMovies(newMovieList);
  };
 
  return (
    <>
      <Header />
      <div className="watch">
        <img className="watch_text" src="Watch.png" alt="Watch" />
      </div>

      {movies.map((item) => (
        <Movie_row
          key={item.id}
          props={item}
          
          onDelete={()=>handleDeleteMovie(item.id)}
        />
      ))}


      <Form />
      <Next />
    </>
  );
};

export default Page;
