const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";

export default function searchPlaylist(query: string) {
  return fetch(
    BASE_URL + "search/playlist?limit=10&q=" + query
  ).then(response => response.json());
}
