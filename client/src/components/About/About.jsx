import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./About.module.css";
import about from "../../pictures/ash.png";
import logo_react from "../../pictures/tecnologias/react.png";
import logo_redux from "../../pictures/tecnologias/redux.png";
import logo_express from "../../pictures/tecnologias/express.png";
import logo_sequelize from "../../pictures/tecnologias/sequelize.png";
import logo_postgres from "../../pictures/tecnologias/postgres.png";

class About extends React.Component {
    render() {
      return (
      <div >
          <NavBar />
          <div className={styles.container_about}>
            <div className={styles.conteiner}>
                <p className={styles.text_title}>Pokémon APP</p>
            </div>
            <div className={styles.conteiner_principal}>
                <div>
                    <img className={styles.image_principal} src={about} alt="Acerca de..." />
                </div>
                <div>
                    <p className={styles.text_cita}>"Las circunstancias en las que uno nace no tienen importancia, es lo que uno hace con el don de la vida lo que nos dice quiénes somos."
                    <br /><br />-Mewtwo.<br /><br />

                    </p>            
                </div>
            </div>
            <div className={styles.conteiner}>
                <p className={styles.text}>Proyecto Individual de Pokémon, consiste en una Single Page Application (SPA).
                Los datos se extraen de la API de <a href="https://pokeapi.co/" target="blanc" alt="pokeapi">https://pokeapi.co/</a>. Para el desarrollo de la app utlicé las siguientes tecnologias:
                </p>
                <p className={styles.text}>                               
                    JavaScript -
                    React -    
                    Redux -
                    HTML -
                    CSS -
                    Node.js -
                    Express.js -
                    Sequelize -
                    PostgreSQL
                    </p>
                    <p className={styles.text}> 

                        Las caracteristicas del proyecto son las siguientes:<br />
                        Busca pokémon por nombre.<br />
                        Filtrar por tipos y por origen de la información.<br />
                        Cada Card en la página de inicio muestra un Pokémon y al hacer clic en la misma puedes ver los detalles.<br />
                        Ordenar alfabéticamente y por nivel de ataque.<br />
                        Crear un nuevo Pokémon llenando el formulario.<br />
                <br /><br />Gonzalo Cuellar Aliaga</p>
            </div>
            <div className={styles.conteiner_tecnologias}>
                <img className={styles.image_tecnologias} src={logo_react} alt="react" />
                <img className={styles.image_tecnologias} src={logo_redux} alt="redux" />
                <img className={styles.image_tecnologias} src={logo_express} alt="express" />
                <img className={styles.image_tecnologias} src={logo_sequelize} alt="sequelize" />
                <img className={styles.image_tecnologias} src={logo_postgres} alt="postgres" />
            </div>                
           
          </div>            
      </div> 
      )
    }
  }

export default About;
