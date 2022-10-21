import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const SelectByType = ({setSelectedType}) => {

    const [types, setTypes] = useState()

    useEffect(() => {
      const URL = 'https://pokeapi.co/api/v2/type'
      axios.get(URL)
        .then(res => setTypes(res.data.results))
        .catch(err => console.log(err))
    
    }, [])
    

    const handleChange = (e) => {
        setSelectedType(e.target.value)
    }

  return (
    <select className='selectType' onChange={handleChange}>
        <option value="All Pokemons">All Pokemons</option>
        {
            types?.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectByType