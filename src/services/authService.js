const baseUrl = "http://localhost:3001/";

export const login = async ({ username, password }) => {
  const response = await fetch(baseUrl + "login", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return response.json();
};

export const logout = async (username) => {
  const response = await fetch(baseUrl + "logout", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
    }),
  });
  return response.json();
};
