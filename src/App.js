import React from 'react';
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

  //create a filterDogs function
  filterDogs = (dogFilter) => {
    const filteredDogs = this.state.dogData.filter(dog => {
      const dogName = dog.name.toLowerCase()
      return dogName.includes(
        dogFilter.toLowerCase()
      )
    })

    this.setState({
      filteredDogs
    })
  }


  render() {
    console.log("state", this.state.filteredDogs)

    //map through filtered dogs and pass props to VisibleDogs component

    //show VisibleDogs under FilterForm

    const visibleDogs = this.state.filteredDogs.map(dog => {
      return <VisibleDogs dog={ dog } />
    })

    return (
      <div className="App">
        {/* pass props to filter form */ }
        <FilterForm filterDogs={ this.filterDogs } />
        { visibleDogs }
      </div>
    );
  }
}

export default App;
