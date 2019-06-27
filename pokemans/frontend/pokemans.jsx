import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import * as apiUtils from './util/api_utils';
import * as pokeActions from './actions/pokemon_actions';
import selectAllPokemon from './reducers/selectors';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Pokemansdex</h1>, root)

  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.pokeActions = pokeActions;
  window.selectAllPokemon = selectAllPokemon;
  window.apiUtils = apiUtils;
  window.hi = ()=>console.log('hi');
}); 