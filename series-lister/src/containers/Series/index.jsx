import React from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends React.Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  };

  componentDidMount() {
    
  }

  onSeriesInputChange = event => {
    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
    .then(res => res.json())
    .then(json => this.setState({ series: json }))
  }

  render() {
    return(
      <div>
        The length of series array - {this.state.series.length}
        <div>
          <input type="text" onChange={this.onSeriesInputChange}/>
        </div>
        <SeriesList series={this.state.series} />
      </div>
      
    );
  }
};

export default Series;