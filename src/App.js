import React from 'react';
import logo from './logo.svg';
import './App.css';

import FilterForm from './components/FilterForm'
import VisibleDogs from './components/VisibleDogs'




class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dogData: [],
      filteredDogs: []
    }
  }

  componentDidMount() {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then(response => response.json())
      .then(data => this.setState({ dogData: data }))
  }

  filterDogs = (dogFilter) => {
    let filteredDogs = this.state.dogData.filter(dog => {
      let dogName = dog.name.toLowerCase()
      return dogName.includes(
        dogFilter.toLowerCase())
    })

    this.setState({
      filteredDogs
    })
  }

  render() {

    const visibleDogs = this.state.filteredDogs.map(dog =>
      <VisibleDogs name={ dog.name } temperament={ dog.temperament } origin={ dog.origin } purpose={ dog.bred_for } />)
    return (
      <div className="App">
        <FilterForm dogs={ this.state.filteredDogs } match={ this.props.match } onChange={ this.filterDogs } />
        { visibleDogs }
      </div>
    );
  }
}

export default App;
