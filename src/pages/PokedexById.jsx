import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../components/pokedexById/styles/pokemonById.css'
import Pokemon404 from '../components/pokedexById/Pokemon404'
import title from '../assets/img/PokedexTitle.png'
import Moves from '../components/pokedexById/Moves'

const PokedexById = () => {

  const { id } = useParams()
  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)


  useEffect(() => {

    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [])

  if (hasError) {
    return <Pokemon404 />
  }

  return (
    <div className='page'>
      <header className='headerPage'>
        <img className='titleImg' src={title} alt="title image" />
      </header>
      <div className={`cardPokemonIdContainer border-${pokemon?.types[0].type.name}`}>
        <header className={`cardHeader bg-${pokemon?.types[0].type.name}`} >
          <img className='cardImg' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='informationSection'>
          <div className='basicInfo'>
            <h1 className={`pokemonName letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h1>
            <div className='whInfo'>
              <div className='weight'>
                <p>Weight</p>
                <h4>{pokemon?.weight}</h4>
              </div>
              <div className='height'>
                <p>Height</p>
                <h4>{pokemon?.height}</h4>
              </div>
            </div>
          </div>
          <div className='typesAnHabilities'>
            <div className='types'>
              <h2 className='item1'>Type</h2>
              <h3 className={`item2 letter-${pokemon?.types[0].type.name}`}>{pokemon?.types[0].type.name}</h3>
            </div>
            <div className='habilities'>
              <h2 className='item1'>Hability</h2>
              <h3 className={`item2 letter-${pokemon?.types[0].type.name}`}>{pokemon?.abilities[0].ability.name}</h3>
            </div>
          </div>
          <div className='stats'>
            <ul className='statsPokemonId'>
              {
                pokemon?.stats.map(stat => (
                  <li key={stat.stat.name} className='statPokemon'>
                    <div className='boxStats'>
                      <label className= {`nameStat letter-${pokemon?.types[0].type.name}`}>{stat.stat.name}</label>
                      <span className={` letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}/150</span>
                    </div>
                    <progress className='statBar' max="150" value={stat.base_stat}></progress>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>

        <section className='movesSection'>
          <h1>Movements</h1>
              <Moves />
        </section>
      </div>
    </div>
  )
}

export default PokedexById