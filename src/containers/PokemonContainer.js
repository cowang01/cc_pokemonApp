import React, {Component} from 'react';
import PokemonList from '../components/PokemonList'
import PokemonDetail from '../components/PokemonDetail'

class PokemonContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      pokemonAll: [],
      currentPokemon: null,
      currentPokemonDetail: []
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  handlePokemonSelected(index) {
    this.setState({currentPokemon: this.state.pokemonAll[index]})
    // fetch("http://pokeapi.co/api/v2/pokemon/" + this.currentPokemon.name)
    console.log(this.currentPokemon);
  }

  componentDidMount(){
    fetch("http://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(pokemonAll => this.setState({pokemonAll: pokemonAll.results}))
    .catch(err => console.error(err));
  }

  render(){
    return(
      <>
      <p>POKEMON API</p>
      <PokemonList pokemon={this.state.pokemonAll} onPokemonSelected={this.handlePokemonSelected}/>
      <PokemonDetail pokemon={this.state.currentPokemon}/>
      </>
    )
  }


}
export default PokemonContainer;
