

// async function getData(){
//   const response = await axios.get('https://swapi.py4e.com/api/planets/');
//   const{next, results} = response.data;
//   console.log(next);
// //   console.log(response);
// // console.log("THIS LINE IS AFTER AXIOS.GET")
// for(let planet of results){
// console.log(planet.name)
//   }
//   const response2 = await axios.get(next);
//   console.log(response2.data.results)
// }

// getData();
// console.log('I happen After getData()')



async function getPokemon(){
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
  const ul = document.querySelector("#poke")
  for ( let pokemon of res.data.results){
  const newUrl= document.createElement('li');
  const newLi= document.createElement('B');
  newLi.innerText = pokemon.name
  newLi.append(newUrl);
  newUrl.innerHTML += `-${pokemon.url}`
   ul.append(newLi);
  }
  const btn = document.querySelector('#getpokemons');
  btn.addEventListener('click',getPokemons)
}

