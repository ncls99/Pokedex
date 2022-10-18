import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/userName.slice'

const FormHome = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault()
        dispatch(setUserNameGlobal(e.target.name.value.trim()))
        navigate('/pokedex')
    }

    return (
        <form className='pokedexForm' onSubmit={submit}>
            <input
                className='pokedexInput'
                type="text"
                placeholder='Your name:'
                id='name'
            />
            <button className='pokedexBtn'>Start</button>
        </form>
    )
}

export default FormHome