let myFavorites = [];

const postFav = (req, res) => {
  const newFavorite = req.body;

  // Verifica si el personaje ya está en tus favoritos
  const existingFavorite = myFavorites.find(fav => fav.id === newFavorite.id);
  if (existingFavorite) {
    return res.status(400).json({ error: 'Character is already a favorite' });
  }

  myFavorites.push(newFavorite);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ error: 'ID is required' });
    return;
  }

  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: 'ID must be a number' });
    return;
  }

  if (!Array.isArray(myFavorites)) {
    res.status(500).json({ error: 'Server error' });
    return;
  }

  myFavorites = myFavorites.filter(favorite => favorite.id !== id);
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};