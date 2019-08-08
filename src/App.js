import React from 'react';
import './App.css';

import FilterForm from './components/FilterForm'
// import VisibleDogs from './components/VisibleDogs'




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

  render() {
    // console.log("state", ) here
    //map through filtered dogs and pass props to VisibleDogs component
    //show VisibleDogs under FilterForm
    // const visibleDogs = 

    return (
      <div className="App">
        {/* pass props to filter form */ }
        <FilterForm />

      </div>
    );
  }
}

export default App;
