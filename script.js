import { pokemonArray } from "./data/pokemon.js";

//The function to use the object info and create the cards
const pokeCards = (pokemon) => {
  return `<div class="card">
        <div class="card__content"> 

            <div class="card__heading">${pokemon.name}</div>
            <img class="card__image" src ="${pokemon.sprite}"/>
            <div class="card__text"><p>${pokemon.name} (#${pokemon.id}) is a ${pokemon.types} pokemon.</p></div>
  
        </div>
   </div>`;
};

const newContainer = document.querySelector(".card-container");
//a forEach to have each object be run with the function above
pokemonArray.forEach((pokemon) => {
  newContainer.innerHTML += pokeCards(pokemon);
});

//searchBar
const searchBar = document.querySelector(".searchBar");
const filter = document.querySelector("");
searchBar.addEventListener("input", filterList);

const filterList = () => {};
