import React from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from '../../components/Intro';

class Series extends React.Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  };

  componentDidMount() {}

  onSeriesInputChange = event => {
    this.setState({ seriesName: event.target.value, isFetching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then(res => res.json())
      .then(json => this.setState({ series: json, isFetching: false }))
      .catch(function() {
        console.log("error");
    });
  };

  render() {
    const { series, seriesName, isFetching } = this.state;

    return (
      <div>
        <div>
          <Intro message="Search For Series" />
          <input
            type="text"
            value={seriesName}
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFetching &&
          series.length === 0 &&
          seriesName.trim() === "" && (
            <p>please enter a series name in to the input</p>
          )}
        {!isFetching &&
          series.length === 0 &&
          seriesName.trim() !== "" && (
            <p>No TV series have been found with this name</p>
          )}
        {isFetching && <Loader />}
        {!isFetching && <SeriesList series={this.state.series} />}
      </div>
    );
  }
}

export default Series;
