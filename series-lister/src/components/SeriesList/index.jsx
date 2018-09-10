import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import "./index.css";

const StyledListItem = styled.li`
  padding: 10px;
  margin: 10px 0;
  background: rgba(0, 0, 0, 0.5);
`;

const SeriesListItem = props => (
  <StyledListItem>
    <Link style={{textDecoration: "none", color: "#fff"}}to={`/series/${props.episode.show.id}`}>
      <li key={props.episode.show.id}>{props.episode.show.name}</li>
    </Link>
  </StyledListItem>
);

const SeriesList = props => {
  return (
    <div>
      <ul className="series-list">
        {props.series.map(episode => (
          <SeriesListItem episode={episode} />
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
