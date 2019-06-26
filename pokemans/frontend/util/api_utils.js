
//ajaxing relaxing all cool and all shoot some bball outside of the school

export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon',
  });
};