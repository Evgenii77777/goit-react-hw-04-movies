import axios from "axios";

const KEY = "f579fcbbcf5d2ce91ce8a1bd692fe85b";

export function fetchSearch(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  return axios.get(url).then((respons) => {
    return respons.data;
  });
}
