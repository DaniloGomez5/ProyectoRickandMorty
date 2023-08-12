import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/Actions";
import { useState } from "react";

export function Favorites({ myFavorites }) {
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <select
          onChange={handleOrder}
          style={{
            display: "flex",
            position: "relative",
            padding: "5px",
            margin: "5px",
            boxShadow: "3px 3px 3px 0px #00C957",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "Rick2",
          }}
        >
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select
          onChange={handleFilter}
          style={{
            display: "flex",
            position: "relative",
            padding: "5px",
            margin: "5px",
            boxShadow: "3px 3px 3px 0px #00C957",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "Rick2",
          }}
        >
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

export default connect(mapStateToProps)(Favorites);
