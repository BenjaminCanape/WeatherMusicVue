const BASE_URL = "http://localhost:3000";

export default function searchPlaylist(weatherName: string) {
  return fetch(
    BASE_URL + "/getPlaylist?weatherName=" + weatherName
  ).then(response => response.json());
}
