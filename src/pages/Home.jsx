import React from 'react'
import FormHome from '../components/home/FormHome'
import title from '../assets/img/PokedexTitle.png'
import './styles/home.css'

const Home = () => {
  return (
    <div className='pokedexLogin'>
      <img className='pokedexImg' src={title} alt="title image" />
      <header className='pokedexHeader'>
        <h2 className='pokedexSubtitle'>Hi Trainer!</h2>
        <p className='pokedexText'>Enter your name to start</p>
      </header>
      <FormHome />
    </div>
  )
}

export default Home