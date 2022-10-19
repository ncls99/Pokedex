import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokemonById.css'
const Moves = () => {

const  {id} = useParams()
const [moves, setMoves] = useState()

useEffect(() => {
const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res => {
        const data = res.data.moves
        setMoves(data.slice(0,14))
        })
        .catch(err => console.log(err))
}, [])

console.log(moves)

  return (
    <div className='cardMoves'>
        {
            moves?.map(movement => (
                <h4 className='move'>{movement.move.name}</h4>
            ))
        }
    </div>
  )
}

export default Moves