import React from 'react';

const API_ENDPOINT = import.meta.env.VAULT_API_ENDPOINT;
const access_token = import.meta.env.VAULT_ACCESS_TOKEN;

function Landing() {
  const [search, setSearch] = React.useState('');

  async function getResults() {
    const headers = {
      accept: 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    const myHeaders = new Headers(headers);

    const options = {
      method: 'GET',
      headers: myHeaders,
    };

    const res = await fetch(
      `${API_ENDPOINT}?query=${search}&include_adult=false`,
      options
    );
    if (!res.ok) throw new Error('An error occurred accessing the API');
    const data = await res.json();
    return data;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await getResults();
    console.log(data);
    setSearch('');
  }

  return (
    <div className="grid gap-24 place-content-center">
      <main>
        <h1 className="text-6xl">Your one-stop-search for movies</h1>
      </main>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="grid gap-9"
      >
        <input
          className="p-4 rounded-lg bg-indigo-1 placeholder-slate-11 border border-indigo-8 text-xl outline-none focus-within:border-2"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search for a movie"
        />
        <button
          className="rounded-lg mx-auto px-5 py-4 text-xl border border-indigo-8"
          type="submit"
        >
          Search Away
        </button>
      </form>
    </div>
  );
}

export default Landing;
