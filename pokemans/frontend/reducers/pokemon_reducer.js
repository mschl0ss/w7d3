import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {};
  // debugger;
  switch(action.type) {
    case RECEIVE_ALL_POKEMON: 
      Object.values(action.pokemon).forEach(pokemon => {
        nextState[pokemon.id] = pokemon;
      });
      return nextState;
    default: 
      return state; 
  }
};

export default pokemonReducer;