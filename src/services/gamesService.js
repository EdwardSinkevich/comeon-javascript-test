const baseUrl = "http://localhost:3001/";

export const getGames = async () => {
  const response = await fetch(baseUrl + "games", {
    method: "get",
  });
  return response.json();
};

export const getCategories = async () => {
    const response = await fetch(baseUrl + "categories", {
      method: "get",
    });
    return response.json();
  };
