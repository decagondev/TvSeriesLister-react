import React from "react";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

class SingleSeries extends React.Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
      .then(res => res.json())
      .then(json => this.setState({ show: json }));
  }
  render() {
    const { show } = this.state;

    return (
      <div>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <div>
              <h1>{show.name}}</h1>
              <p>Premiere: {show.premiered}</p>
              <p>Rating: {show.rating.average}</p>
              <img src={show.image.medium} alt="show" />
            </div>
            <Link to="/">Back</Link>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSeries;
