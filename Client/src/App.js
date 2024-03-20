import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav";
import About from "./components/About/About";
import Details from "./components/Details/Detail";
import Form from "./components/Form/Form";
import axios from "axios";
<<<<<<< HEAD
import { Routes, Route, useNavigate, Await } from "react-router-dom";
import Favorites from "./components/Favoritos/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "danilog992@gmail.com";
  const PASSWORD = "aldopedro2";
=======
import { Routes, Route, useNavigate, Await, useLocation } from "react-router-dom";
import Favorites from "./components/Favoritos/Favorites";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
>>>>>>> fc5ea8da16a22fbd40800ca31572d042e7e1e393

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = `http://localhost:3001/rickandmorty/login/`;
      const { data } = await axios.get(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      if (access) {
        navigate("/home");
      }
    } catch (error) {
      console.log("================================");
      console.log({ error });
      console.log("================================");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

<<<<<<< HEAD
=======

>>>>>>> fc5ea8da16a22fbd40800ca31572d042e7e1e393
  const onSearch = async (id) => {
    const repeated = characters.find((item) => item.id === Number(id));
    if (repeated) {
      alert("Este personaje ya fue agregado! :(");
      return;
    }

    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log("================================");
      console.log({ error });
      console.log("================================");
    }
  };

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <Nav onSearch={onSearch} />
=======
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
>>>>>>> fc5ea8da16a22fbd40800ca31572d042e7e1e393
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <div>
              <h1
                style={{
                  margin: 50,
                  fontFamily: "RickandMorty",
                  fontSize: "60px",
                  color: "#00C957",
                }}
              >
                Rick and Morty
              </h1>
              <Cards characters={characters} onClose={onClose} />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      <footer>
        <p
          style={{
            color: "white",
            fontSize: "10px",
            fontWeight: "bold",
            backgroundColor: "black",
          }}
        >
          &copy; 2023 Danilo Gomez. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
