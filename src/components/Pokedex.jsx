import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import pokedexLogo from '../assets/images/pokedexLogo.png'


const Pokedex = () => {

    const trainerName = useSelector(state => state.userName)

    const [pokemons, setPokemons] = useState([])
    const [inputSearch, setInputSearch] = useState("")
    const [types, setTypes] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279`)
            .then(res => setPokemons(res.data.results))

        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setTypes(res.data.results))
    }, [])

    console.log(pokemons)

    const [page, setPage] = useState(1)
    const pokemonsPerPage = 12
    const lastIndex = page * pokemonsPerPage
    const firstIndex = lastIndex - pokemonsPerPage
    const pokemonsPaginated = pokemons.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)

    const pages = []
    for(let i = 1; i <= totalPages; i++)(
        pages.push(i)
    )

    const pagesPaginated = pages.slice(firstIndex, lastIndex)

    const search = () => {
        navigate(`/pokedex/${inputSearch.toLowerCase()}`)
    }

    const filterType = (e) => {
        axios.get(e.target.value)
            .then(res => (setPokemons(res.data.pokemon)))
    }

    return (
        <div className='pokedex-page'>
            <div className='pokedexHeader-container'>
                <div className='pokedexHeader-icons'>
                    <div className='pokedexRectangle-one'>
                    </div>
                    <div className='pokedexRectangle-two'>
                        <div className='pokedexCircle-one'>
                            <div className='pokedexCircle-two'></div>
                        </div>
                    </div>
                    <img src={pokedexLogo} alt="pokedex-logo" />
                </div>
            </div>
            <div className='pokedexBody-container'>
                <div className='pokedex-welcome'>
                    <p><b>Welcome trainer {trainerName},</b> here you can find your favorite pokemons</p>
                </div>
                <div className='pokedex-comands'>
                    <div className='pokedex-inputBtn'>
                        <input type="text" placeholder='Type a pokemon name' value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                        <button onClick={search}>Search</button>
                    </div>
                    <select onChange={filterType} name="" id="">
                        {types.map((type) => (
                            <option value={type.url} key={type.url}>
                                {type.name.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='pokedex-gridContainer'>
                    {
                        pokemonsPaginated.map(pokemon => (
                            <PokemonCard url={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                        ))
                    }
                </div>
                <div className='pages-container'>
                    {pages.map(number => 
                        <button className='paginated-btn' key={number} onClick={()=> setPage(number)}>{number}</button>    
                    )}
                </div>
                <div className='paginated-controls'>
                    <button className='previous-page' onClick={() => setPage(page - 1)} disabled={page === 1}><i className="fa-solid fa-angles-left"></i></button>
                    <p>{page}/{totalPages}</p>
                    <button className='next-page' onClick={() => setPage(page + 1)} disabled={page === totalPages}><i className="fa-solid fa-angles-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Pokedex;