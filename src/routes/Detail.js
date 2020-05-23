import React from "react";

// function Detail(props) {
// const movie = props.location.state;
//   console.log(movie.title);
//   return <span>gdgd</span>;
// }

function Detail(props) {
  const movie = props.location.state;
  return (
    <div>
      <img src={movie.poster} alt={movie.title} title={movie.title} />
      <div>
        <h1>{movie.title}</h1>
        <h5>{movie.year}</h5>
        <p>{movie.summary}</p>
        <ul>
          {movie.genres.map((current, index) => (
            <li id={index}>{current}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Detail;
