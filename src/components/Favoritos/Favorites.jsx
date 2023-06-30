import { connect } from "react-redux";
import Card from "../Card/Card";



export function Favorites ({myFavorites}) {
    return <div>{
        myFavorites.map((characters) =>{
            return (
                <Card
                    key={characters.id}
                    id={characters.id}
                    name={characters.name}
                    status={characters.status}
                    species={characters.species}
                    gender={characters.gender}
                    origin={characters.origin?.name}
                    image={characters.image}
                />
            )
        })    
    }</div>
}

function mapStateToProps (state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps)(Favorites)
