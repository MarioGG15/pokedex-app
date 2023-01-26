import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import pokedexLogo from '../assets/images/pokedexLogo.png'
import pikachuimg from '../assets/images/pikachu.png'

const InputName = () => {

    const dispatch = useDispatch();

    const [trainerName, setTrainerName] = useState("");

    const navigate = useNavigate();

    const trainerWelcome = () => {
        dispatch(changeUserName(trainerName))
        navigate("/pokedex")
    }

    return (
        <div className='home-page'>
            <div className='intro-container'>
                <div className='introLogo-container'>
                    <img src={pokedexLogo} alt="pokedex-logo" className='introPokedex-logo'/>
                    <img src={pikachuimg} alt="" className='introPikachu-img'/>
                </div>
                <div className='welcome-container'>
                    <h1>Hello trainer!</h1>
                    <p>To start, please give me your name</p>
                </div>
                <div className='welcomeInput-container'>
                    <input type="text" placeholder='Your name here...' value={trainerName} onChange={e => setTrainerName(e.target.value)} />
                    <button onClick={trainerWelcome}>Start</button>
                </div>
            </div>
            <div className='introFooter-icons'>
                <div className='introRectangle-one'>
                </div>
                <div className='introRectangle-two'>
                </div>
            </div>
        </div>
    );
};

export default InputName;