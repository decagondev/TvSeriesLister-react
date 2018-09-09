import React from "react";
import './index.css';

const SeriesListItem = props => <li key={props.episode.show.id}>{props.episode.show.name}</li>;;

const SeriesList = props => {
  return (
    <div>
      <ul className="series-list">
        {props.series.map(episode => <SeriesListItem episode={episode} /> )}
      </ul>
    </div>
  );
};

export default SeriesList;
