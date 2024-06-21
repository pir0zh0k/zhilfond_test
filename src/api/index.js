import axios from "axios";

export const $api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export async function getById(idArray) {
  const users = await $api.get("users", {
    params: {
      id: idArray,
    },
  });

  return users;
}

export async function getByUsername(usernameArray) {
  const users = await $api.get("users", {
    params: {
      username: usernameArray,
    },
  });

  return users;
}
