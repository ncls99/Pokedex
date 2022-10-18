import { useEffect, useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import CardPokemon from '../components/pokedex/CardPokemon'
import axios from 'axios'
import InputSearch from '../components/pokedex/InputSearch'
import SelectByType from '../components/pokedex/SelectByType'
import title from '../assets/img/PokedexTitle.png'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [selectectedType, setSelectectedType] = useState('All Pokemons')

  useEffect(() => {
    if (selectectedType !== 'All Pokemons') {
      axios.get(selectectedType)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))

    } else {

      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))

    }
  }, [selectectedType])

  const userName = useSelector(state => state.userName)

  return (
    <div>
      <header>
      <img className='titleImg' src={title} alt="title image" />
        <p>Welcome <span>{userName}</span> here you can find your favorite Pokemon</p>
      </header>
      <aside className='inputsContainer'>
        <InputSearch />
        <SelectByType setSelectectedType={setSelectectedType}/>
      </aside>
      <main>
        <div className='cardsContainer'>
          {
            pokemons?.map(pokemon => (
              <CardPokemon
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Pokedex