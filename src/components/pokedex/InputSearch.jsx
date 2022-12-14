import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/pokedex.css'

const InputSearch = () => {

const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }

  return (
    <form className='inputPokedexForm' onSubmit={submit} >
        <input className="pokedexInput" id='search' type="text" placeholder='Search your Pokemon'/>
        <button className="pokedexBtn">Search</button>
    </form>
  )
}

export default InputSearch