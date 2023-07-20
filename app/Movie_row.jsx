import React from 'react';
import Rating from './Like';
import DeleteBtn from './Delete';

const Movie_row = ({ props, onDelete ,handleVoteUp ,handleVoteDown,votes}) => {
  return (
    <>
      <div className="movie">
        <div className="movie1">
          <div className="empty"></div>
          <div className="empty1"></div>
          <div className="movie_info">
            <img
              className="movie_img"
              src={props.poster_path ? `https://image.tmdb.org/t/p/original/${props.poster_path}` : ''}
              alt={props.title}
              width="200px"
              height="255px"
            />
            <div className="info_box">
              <div className="movie_name">
                <h1 className="movie_head">{props.title}</h1>
                <p className="time_type">{props.release_date}</p>
              </div>
              <div className="movie_name1">
                <h3 className="description">Description</h3>
                <p className="movie_des">{props.overview}</p>
              </div>
              <div className="icons"></div>
            </div>
          </div>
        </div>
      </div>
      <Rating  handleVoteUp={handleVoteUp} handleVoteDown={handleVoteDown} votes={votes}/>
      <DeleteBtn onDelete={onDelete} />
    </>
  );
};

export default Movie_row;

