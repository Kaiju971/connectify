const authEndpoint = "hhtps://accounts.spotify.com/authoririze?";
const clientId = "1e9dbdb9d7e8465ea5f54693b9970924";
const redirectUrl = "http://localhost:3000/Profil";
const scopes = ["user-libraryread","playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id${clientId}&redirect_url=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;