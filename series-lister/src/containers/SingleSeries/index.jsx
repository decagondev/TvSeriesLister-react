import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../components/Loader";

const StyledSeriesImage = styled.img`
  border-radius: 8px;
  border: 2px solid #333;
  margin-bottom: 40px;
  -webkit-box-shadow: 4px 4px 20px 2px rgba(153, 153, 153, 1);
  -moz-box-shadow: 4px 4px 20px 2px rgba(153, 153, 153, 1);
  box-shadow: 4px 4px 20px 2px rgba(153, 153, 153, 1);
`;

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
              <h1>{show.name}</h1>
              <p>Premiere: {show.premiered}</p>
              <p>Rating: {show.rating.average}</p>
              <StyledSeriesImage src={show.image.medium} alt="show" />
            </div>
            <Link style={{background: "white", padding: 18, color: "#333", border: "1px solid #333", textDecoration: "none", borderRadius: "15px"}} to="/">
              Back
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSeries;
