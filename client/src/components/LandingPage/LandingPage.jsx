import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons, getTypes, loadingPokemonsSet } from "../../store/actions";
import './LandingPage.css';
import videoBG from "../../videos/videoBG.mp4";

export default function LandingPage() {


    let dispatch = useDispatch();    


    useEffect(() => {
        dispatch(loadingPokemonsSet(true));
        dispatch(getPokemons());
        dispatch(getTypes());
        // eslint-disable-next-line
    }, []); 


    return(  
        <div className='main'>
        <div className="overlay"></div>
        <video src={videoBG} autoPlay loop muted />
        <div className="content">
            <h1 className='titulo'>Pokémon</h1>
            <h2 className='texto'>¡Atrápalos a todos!</h2>
            <Link to="/pokemons">
                        <button className="waitAnimate">Entrar</button>
            </Link>
        </div>
    </div>
    )


    
}