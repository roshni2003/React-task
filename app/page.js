"use client";
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Movie_row from './Movie_row';
import Form from './Form_add';                                            
import Next from './Footer';

const Page = () => {
  const [movies, setMovies] = useState([]);
  const [votes, setVotes] = useState({});

  const handleDeleteMovie = (movieId) => {
    const newMovieList = movies.filter((movie) => movie.id !== movieId);
    setMovies(newMovieList);
  };
    const handleVoteUp=(id)=>{
        const Votes={...votes}
        if (Votes[id]===undefined){
            Votes[id]=1
        }
        else{
            Votes[id]+=1
        }
        setVotes (Votes);
    };
    const handleVoteDown=(id)=>{
        const Votes={...votes}
        if (Votes[id]===undefined){
            Votes[id]=-1
        }
        else{
            Votes[id]-=1
        }
        setVotes (Votes);
    };
    const dataSort=movies.sort((a, b) => {
        const rate1 = votes[a.id] || 0;
        const rate2 = votes[b.id] || 0;
        return rate2 - rate1;
    });

    useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=97498dead7f62c325c2a40627936b914&language=en-US&page=1'
        );
        const data = await response.json();
        const movie_data = data.results;
        const topRatedMovie = movie_data.slice(5, 15);
        setMovies(topRatedMovie);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

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
          onDelete={() => handleDeleteMovie(item.id)}
          handleVoteUp={()=>handleVoteUp(item.id)}
          handleVoteDown={()=>handleVoteDown(item.id)}
          votes={votes[item.id]}
        />
      ))}

      <Form />
      <Next />
    </>
  );
};

export default Page;
