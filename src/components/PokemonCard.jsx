import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({})
    
    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    const navigate = useNavigate()

    return (
        <div className={`pokemon-card ${pokemon.types?.[0]?.type.name}`} onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <div className={`gradient-rectangle ${pokemon.types?.[0]?.type.name}`}>
            </div>
            <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="pokemons" />
            <div className='pokemon-info'>
                <h2 className={`${pokemon.types?.[0]?.type.name}`}>{pokemon.name?.toUpperCase()}</h2>
                <p className='type-header'>Types</p>
                <div className='types-container'>
                    <div className={`type ${pokemon.types?.[0]?.type.name}`}>
                        <p>{pokemon.types?.[0]?.type.name.toUpperCase()}</p>
                    </div>
                    <div className={`type ${pokemon.types?.[1]?.type.name}`}>
                        <p>{pokemon.types?.[1]?.type.name.toUpperCase()}</p>
                    </div>
                </div>
            </div>
            <div className='pokemon-stats'>
                <p>Base Stats</p>
                <div className='stats-container'>
                    <div className='stat'>
                        <p className='stat-name'>{pokemon.stats?.[0].stat.name.toUpperCase()}</p>
                        <p className={`stat-data ${pokemon.types?.[0]?.type.name}`}>{pokemon.stats?.[0].base_stat}</p>
                    </div>
                    <div className='stat'>
                        <p className='stat-name'>{pokemon.stats?.[1].stat.name.toUpperCase()}</p>
                        <p className={`stat-data ${pokemon.types?.[0]?.type.name}`}>{pokemon.stats?.[1].base_stat}</p>
                    </div>
                    <div className='stat'>
                        <p className='stat-name'>{pokemon.stats?.[2].stat.name.toUpperCase()}</p>
                        <p className={`stat-data ${pokemon.types?.[0]?.type.name}`}>{pokemon.stats?.[2].base_stat}</p>
                    </div>
                    <div className='stat'>
                        <p className='stat-name'>{pokemon.stats?.[3].stat.name.toUpperCase()}</p>
                        <p className={`stat-data ${pokemon.types?.[0]?.type.name}`}>{pokemon.stats?.[3].base_stat}</p>
                    </div>
                    <div className='stat'>
                        <p className='stat-name'>{pokemon.stats?.[4].stat.name.toUpperCase()}</p>
                        <p className={`stat-data ${pokemon.types?.[0]?.type.name}`}>{pokemon.stats?.[4].base_stat}</p>
                    </div>
                    <div className='stat'>
                        <p className='stat-name'>{pokemon.stats?.[5].stat.name.toUpperCase()}</p>
                        <p className={`stat-data ${pokemon.types?.[0]?.type.name}`}>{pokemon.stats?.[5].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
