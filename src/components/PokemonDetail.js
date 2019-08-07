import React, {Component} from 'react';

// class PokemonDetail extends Component {
//
//     // constructor(props){
//     //   super(props);
//     //   this.state = {
//     //     url: ""
//     //   }
//     // };
//     //
//     // componentDidMount(){
//     //   fetch("http://pokeapi.co/api/v2/pokemon/"+this.props.pokemon.name)
//     //   .then(res => res.json())
//     //   .then()
//     // }
//
//   render(){
//       if(!this.props.pokemon) return null;
//       return (
//         <div>
//           <h2>{this.props.pokemon.name}</h2>
//         </div>
//       )
//   }
//
// }

const PokemonDetail = ({pokemon}) => {



  if(!pokemon) return null;
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>{pokemon.url}</p>
    </div>
  )
};
export default PokemonDetail;
