import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Pokemon404 from '../components/pokedexById/Pokemon404'

const PokedexById = () => {

  const {id} =  useParams()
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
  
  if(hasError){
    return <Pokemon404/>
  }

  return (
    <div>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section>
        <h2>{pokemon?.name}</h2>
      </section>
    </div>
  )
}

export default PokedexById