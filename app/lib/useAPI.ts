const access_token = process.env.TMDB_ACCESS_TOKEN;

async function getAPIData(endpoint: string) {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${access_token}`,
  };

  const options = {
    method: "GET",
    headers: headers,
  };

  const API_URL = `https://api.themoviedb.org/3${endpoint}`;

  const res = await fetch(API_URL, options);
  if (!res.ok) throw new Error("An error occurred accessing the API");
  const data = await res.json();
  return data;
}

export default getAPIData;
