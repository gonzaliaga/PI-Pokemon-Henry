import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../pictures/logo.png";
import pokemon from "../../pictures/pokemon.png";
import styles from "./NavBar.module.css";


export default function NavBar() {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_container}>
        <div className={styles.nav_menu_izquierda}>
          <Link to="/">
            <img src={logo} className={styles.nav_bar_logo} alt="Pokemon App" />
          </Link>
          <div className={styles.menu}>
            <ul>
              <li><Link to="/pokemons"><span ><i className="icon icon_e901"></i> </span>Inicio</Link></li>
              <li><Link to="/create"><span ><i className="icon "></i> </span>Crear</Link></li>
              <li><Link to="/about"><span ><i className="icon "></i> </span>Acerca</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.nav_menu_derecha}>
          <img src={pokemon} className={styles.pokemon} alt="Pokémon" />
        </div>
      </div>
    </div>
  );
}
