const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const getCharById = async (req, res) => {
  const id = req.params.id;
  try {
    const { data } = await axios.get(`${URL}${id}`);
    const {
      id: characterId,
      name,
      gender,
      species,
      origin: { name: origin },
      image,
      status,
    } = data;
    let character = {
      id: characterId,
      name,
      gender,
      species,
      origin,
      image,
      status,
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(error.message);
  }
};
module.exports = getCharById;
