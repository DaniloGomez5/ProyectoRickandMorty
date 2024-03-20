import { Link } from 'react-router-dom'; 
import style from 'styled-components';
import { styleJs } from './styles';
import './styles.css';
import styleModule from './styles.module.css';
import React, { useState } from 'react';
import {addFav, removeFav } from '../../redux/Actions'
import { connect } from 'react-redux';

const OriginItem = style.div`
   color: white;
   font-family: Rick2;
   font-size: 18px;
   text-shadow: 5px 5px 5px black;
   padding-bottom: 20px;
`

export function Card({id, image, name, species, gender, origin, onClose, removeFav, addFav, myFavorites,}) {
   
   const [isHovered, setIsHovered] = useState(false);

   const isFav = myFavorites.some(fav => fav.id === id);

   const handleFavorite = () => {
      let character = {
         id,
         name,
         origin,
         image,
         gender,
         species
      }
      if(isFav){
         removeFav(id)
      }
      else {
         addFav(character)
      }
   }

   return (
      <div 
         style={{
            ...styleJs.containerCard,
            ...(isHovered && styleJs.containerCardHover),
         }}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         >
         
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
               ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         
         <button 
            onClick={() => onClose(id)}
            className='styleButton'
         >X</button>
         
         <img 
            src={image} 
            alt='No se puedo cargar la imagen' 
            width={180} 
            height={180}
            style={styleJs.stylesImg}
         />
        
         <Link to={`/detail/${id}`}> 
            <h2 style={styleJs.title}>{name}</h2>
         </Link>
         
         <div 
            className={styleModule.containerSubtitle}
         >
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         
         <OriginItem>{origin}</OriginItem>
      
      </div>
   );
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }

}

export const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);