const access_token = import.meta.env.VAULT_ACCESS_TOKEN;

async function getAPIData(api: string, endpoint: string) {
  const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${access_token}`,
  };

  const myHeaders = new Headers(headers);

  const options = {
    method: 'GET',
    headers: myHeaders,
  };

  const res = await fetch(`${api}${endpoint}`, options);
  if (!res.ok) throw new Error('An error occurred accessing the API');
  const data = await res.json();
  return data;
}

export default getAPIData;
