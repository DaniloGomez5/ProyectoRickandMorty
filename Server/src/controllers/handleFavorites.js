myFavorites = [];

const postFav = (req, res) => {
  const newFavorite = req.body;
  myFavorites.push(newFavorite);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const id = req.params.id;
  myFavorites = myFavorites.filter((favorite) => favorite.id !== id);
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
