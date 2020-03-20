import React, { Component } from 'react';
import CardList from './CardList';
import { doggos } from './Doggos';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      doggos: doggos,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    console.log(event.target.value);
  }

  render() {
    const filteredDoggos = this.state.doggos.filter(doggos => {
      return doggos.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1>DoggoFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList doggos={filteredDoggos}/>
      </div>
    );
  }
}

export default App;
