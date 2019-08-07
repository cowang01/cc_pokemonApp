
import React from 'react';

const PokemonList = (props) => {

  const options = props.pokemon.map( (pokemon, index)  => {
    return <li value={index} key={index}> {pokemon.name}</li>;
  })

  function handleClick(event){
    props.onPokemonSelected(event.target.value)
  }

  return(
    <>
      <ul onClick={handleClick}>
      {options}
      </ul>
    </>
  )
}
export default PokemonList;
