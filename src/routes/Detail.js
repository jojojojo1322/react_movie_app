import React from "react";
import { Redirect } from "react-router-dom";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    console.log(location);
  }

  render() {
    const movie = this.props.location.state;
    console.log(movie);
    if (movie) {
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
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Detail;

// function Detail(props) {
//   const movie = props.location.state;
//   return (
//     <div>
//       <img src={movie.poster} alt={movie.title} title={movie.title} />
//       <div>
//         <h1>{movie.title}</h1>
//         <h5>{movie.year}</h5>
//         <p>{movie.summary}</p>
//         <ul>
//           {movie.genres.map((current, index) => (
//             <li id={index}>{current}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
