import { connect } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/Actions";
import { useState } from "react";

export function Favorites({ myFavorites, orderCards, filterCards }) {
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    orderCards(e.target.value);
    setAux(!aux);
  };

  const handleFilter = (e) => {
    filterCards(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {myFavorites.map((characters) => {
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
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    orderCards: (value) => dispatch(orderCards(value)),
    filterCards: (value) => dispatch(filterCards(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
