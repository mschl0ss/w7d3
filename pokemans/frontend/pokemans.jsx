import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { fetchAllPokemon } from './util/api_utils';
import { receiveAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Pokemansdex</h1>, root)

  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPokemon= fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.hi = ()=>console.log('hi');
}); 