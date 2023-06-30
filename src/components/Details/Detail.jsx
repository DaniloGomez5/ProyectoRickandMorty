import styles from './Detail.module.css'
import axios from "axios";
import { useParams, } from "react-router-dom";
import { useState, useEffect } from 'react'


const Detail = () => {
    const [character, setCharacter] = useState({});
    const { id } = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);
    return(
        <div>
            {character.name &&(
                <div className={styles.container}>
                    <img src={character.image} alt={character.name} width='auto' height='100%' style={{borderRadius:'50%'}} />
                    <div className={styles.right}>
                        <h1>{character.name}</h1>
                        <p>{character.species}</p>
                        <p>{character.status}</p>
                        <p>{character.origin.name}</p>
                        <p>{character.gender}</p>
                    </div>
                </div>    
            )}

        </div>
    )
}

export default Detail