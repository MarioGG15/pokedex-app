import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import pokedexLogo from '../assets/images/pokedexLogo.png'
import detectivePikachu from '../assets/images/detectivePikachu.png'

const PokemonDetails = () => {

    const { id } = useParams()

    const [pkmDetail, setPkmDetail] = useState({})

    const [movements, setMovements] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPkmDetail(res.data))

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setMovements(res.data.moves))
    }, [])

    return (
        <div className='pokemonDetails-page'>
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
            <div className='pkmnDetails-card'>
                <div className={`gradient-rectangle ${pkmDetail.types?.[0]?.type.name}`}>
                </div>
                <img src={pkmDetail.sprites?.other["official-artwork"].front_default} alt='pokemons' />
                <div className='detail-info'>
                    <h1 className={`${pkmDetail.types?.[0]?.type.name}`}>#{pkmDetail.id}</h1>
                    <h2 className={`${pkmDetail.types?.[0]?.type.name}`}><i className="fa-solid fa-angles-right"></i> {pkmDetail.name?.toUpperCase()} <i className="fa-solid fa-angles-left"></i></h2>
                    <div className='height-weight'>
                        <div>
                            <p className='hw-title'>Weight</p>
                            <p className='hw-data'>{pkmDetail.weight}</p>
                        </div>
                        <div>
                            <p className='hw-title'>Height</p>
                            <p className='hw-data'>{pkmDetail.height}</p>
                        </div>
                    </div>
                    <div className='types-abilities'>
                        <div className='pkmnDetails-types'>
                            <p className='type-headerDetails'>Types</p>
                            <div className='detailTypes-container'>
                                <div className={`type ${pkmDetail.types?.[0]?.type.name} type-detail`}>
                                    <p>{pkmDetail.types?.[0]?.type.name.toUpperCase()}</p>
                                </div>
                                <div className={`type ${pkmDetail.types?.[1]?.type.name} type-detail`}>
                                    <p>{pkmDetail.types?.[1]?.type.name.toUpperCase()}</p>
                                </div>
                            </div>
                        </div>
                        <div className='pkmnDetails-abilites'>
                            <p className='type-headerDetails'>Abilites</p>
                            <div className='abilities-container'>
                                <div className="ability">
                                    <p>{pkmDetail.abilities?.[0].ability.name.toUpperCase()}</p>
                                </div>
                                <div className="ability">
                                    <p>{pkmDetail.abilities?.[1]?.ability.name.toUpperCase()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='detailStats-container'>
                    <h2 className='stats-mainHeader'><i className="fa-solid fa-chart-column"></i> Stats</h2>
                    <div className='stat-container'>
                        <div className='stat-header'>
                            <p>HP:</p>
                            <p>{pkmDetail.stats?.[0].base_stat}/150</p>
                        </div>
                        <div className='stat-bar'></div>
                        <div className='stat-header'>
                            <p>ATTACK:</p>
                            <p>{pkmDetail.stats?.[1].base_stat}/150</p>
                        </div>
                        <div className='stat-bar'></div>
                        <div className='stat-header'>
                            <p>DEFENSE:</p>
                            <p>{pkmDetail.stats?.[2].base_stat}/150</p>
                        </div>
                        <div className='stat-bar'></div>
                        <div className='stat-header'>
                            <p>SPECIAL-ATTACK:</p>
                            <p>{pkmDetail.stats?.[3].base_stat}/150</p>
                        </div>
                        <div className='stat-bar'></div>
                        <div className='stat-header'>
                            <p>SPECIAL-DEFENSE:</p>
                            <p>{pkmDetail.stats?.[4].base_stat}/150</p>
                        </div>
                        <div className='stat-bar'></div>
                        <div className='stat-header'>
                            <p>SPEED:</p>
                            <p>{pkmDetail.stats?.[5].base_stat}/150</p>
                        </div>
                        <div className='stat-bar'></div>
                    </div>
                </div>
            </div>
            <div className='pokemonMoves-card'>
                <h2 className='moves-mainHeader'> <i className="fa-solid fa-shield-halved"></i> Movements</h2>
                <div className='moves'>
                    {movements.map(movement => (
                        <h4 key={movement.move.name}>{movement.move.name}</h4>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;