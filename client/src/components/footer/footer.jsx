import react from "react";
import { Link } from "react-router-dom";
import pokeball from "../../pictures/Pokeball.png";

export default function Footer() {

    return (
    <div >
        <pokeball/>  
        <div >
            <div>
                <div >
                    <SearchBar/>
                </div>
                <div >
                    <OrderBar/>
                </div>
            </div>                
            
            <div className={styles.gallery_pokemon}>
                <Pokemons pks={pokemons} />  
            </div>
        </div>
     
    </div>
    );
}