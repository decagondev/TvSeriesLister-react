import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SeriesListItem = props => (
  <li>
    <Link to={`/series/${props.episode.show.id}`}>
      <li key={props.episode.show.id}>{props.episode.show.name}</li>
    </Link>
  </li>
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
