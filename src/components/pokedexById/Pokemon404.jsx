import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../../assets/img/notFound.jpg'
import './styles/notFound.css'
import title from '../../assets/img/PokedexTitle.png'
import '../pokedex/styles/pokedex.css'

const Pokemon404 = () => {
  return (
    <div className='containerErrorPage'>
        <header className='pokedexHeaderNotFound'>
          <img className='titleImg' src={title} alt="title image" />
        </header>
      <div className='errorPage'>
        <h1 className='errorTitle'>Pokemon not found :c</h1>
        <div className='imgBox'>
          <img src={gif} alt="" />
        </div>
        <Link className='linkError' to='/pokedex'>Cleck Here To Return to Pokedex</Link>
      </div>
    </div>
  )
}

export default Pokemon404