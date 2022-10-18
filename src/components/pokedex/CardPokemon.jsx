import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPokemon.css'
const CardPokemon = ({ url }) => {

    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <div onClick={handleClick} className={`cardPokemon border-${pokemon?.types[0].type.name}`}>
            <header className={`cardPokeHeader bg-${pokemon?.types[0].type.name}`}>
                <img className='cardPokeImg' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <section className='cardPokeBody'>
                <h3 className={`cardPokeName letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                <ul className='cardPokeTypesContainer'>
                    {
                        pokemon?.types.map(type => (
                            <li key={type.slot} className='cardPoketype'>{type.type.name}</li>
                        ))
                    }
                </ul>
                <p className='cardPokeTypeLabel'>Type</p>
            </section>
            <ul className='cardPokeStatsContainer'>
                {
                    pokemon?.stats.map(stat => (
                        <li key={stat.stat.name} className='cardPokeStats'>
                            <span className='cardPokeStatLabel'>{stat.stat.name} </span>
                            <span className={`cardPokeStatNumber letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CardPokemon