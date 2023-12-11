import { useEffect, useState } from "react";

import { useAuth } from "../auth/authContext";
import { getCategories, getGames } from "../services/gamesService";
import { Player } from "../components/Player";
import { SearchInput } from "../components/SearchInput";
import { GameItem } from "../components/GameItem";
import { GameCategory } from "../components/GameCategory";

export const GamesListPage = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const {
    user: { data },
    logout,
  } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const [games, categories] = await Promise.all([
        getGames(),
        getCategories(),
      ]);

      setGames(games);
      setFilteredGames(games);
      setCategories(categories);
    };

    fetchData();
  }, []);

  const handleSearchGame = (event) => {
    const filteredGamesByName = games.filter((game) =>
      game.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredGames(filteredGamesByName);
  };

  const handleSelectCategory = (id) => {
    setSelectedCategoryId(id);
    const filteredGamesByName = games.filter((game) =>
      game.categoryIds.includes(id)
    );
    setFilteredGames(filteredGamesByName);
  };

  return (
    <div className="casino">
      <div className="ui grid centered">
        <div className="twelve wide column">
          <Player avatar={data.avatar} name={data.name} event={data.event} />
          <div
            className="logout ui left floated secondary button inverted"
            onClick={logout}
          >
            <i className="left chevron icon" />
            Log Out
          </div>
        </div>
        <div className="four wide column">
          <SearchInput onSearch={handleSearchGame} />
        </div>
      </div>
      <div className="ui grid">
        <div className="twelve wide column">
          <h3 className="ui dividing header">Games</h3>
          <div className="ui relaxed divided game items links">
            {filteredGames.map(({ name, description, icon, code }) => (
              <GameItem
                name={name}
                description={description}
                icon={icon}
                code={code}
                key={code}
              />
            ))}
          </div>
        </div>
        <div className="four wide column">
          <h3 className="ui dividing header">Categories</h3>
          <div className="ui selection animated list category items">
            {categories.map(({ id, name }) => (
              <GameCategory
                name={name}
                key={id}
                isSelected={selectedCategoryId === id}
                onSelect={() => handleSelectCategory(id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
