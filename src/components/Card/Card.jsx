import { Link } from 'react-router-dom'; 
import style from 'styled-components';
import { styleJs } from './styles';
import './styles.css';
import styleModule from './styles.module.css';
import React, { useState, useEffect } from 'react';
import {addFav, removeFav } from '../../redux/Actions'
import { connect } from 'react-redux';
import Favorites from '../Favoritos/Favorites';



const OriginItem = style.div`
   color: white;
   font-family: Rick2;
   font-size: 18px;
   text-shadow: 5px 5px 5px black;
   padding-bottom: 20px;
`

function Card(props) {
   
   const [isHovered, setIsHovered] = useState(false);
   
   const {id, image, name, species, gender, origin, onClose, removeFav, addFav, myFavorites,} = props

   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      if (myFavorites && Array.isArray(myFavorites)) {
        myFavorites.forEach((fav) => {
          if (fav.id === id) {
            setIsFav(true);
          }
        });
      }
   }, [myFavorites, id]);
    
   
   const handleFavorite = () => {
      if(isFav){
         removeFav(id)
         setIsFav(false)
      }
      else {
         addFav(id)
         setIsFav(true)
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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (characters) => dispatch(addFav(characters)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);

