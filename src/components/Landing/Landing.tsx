import React from 'react';

<<<<<<< HEAD
import Navbar from '../Navbar';

=======
>>>>>>> main
interface LandingProps {
  search: string;
  setSearch: (str: string) => void;
  handler: (e: React.FormEvent) => void;
}

function Landing({ search, setSearch, handler }: LandingProps) {
  const inputId = React.useId();
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="grid gap-24 place-content-center">
        <main>
          <h1 className="text-6xl">Your one-stop-search for movies</h1>
        </main>
        <form
          onSubmit={(e) => {
            handler(e);
          }}
          className="grid gap-9"
=======
    <div className="grid gap-24 place-content-center">
      <main>
        <h1 className="text-6xl">Your one-stop-search for movies</h1>
      </main>
      <form
        onSubmit={(e) => {
          handler(e);
        }}
        className="grid gap-9"
      >
        <input
          className="p-4 rounded-lg bg-indigo-1 placeholder-slate-11 border border-indigo-8 text-xl outline-none focus-within:border-2"
          id={inputId}
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
>>>>>>> main
        >
          <input
            className="p-4 rounded-lg bg-indigo-3 placeholder-indigo-12 border border-indigo-8 text-xl outline-none focus-within:border-2"
            id={inputId}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search for a movie"
          />
          <button
            className="rounded-lg mx-auto px-5 py-4 text-xl border bg-indigo-6 border-none text-slate-12"
            type="submit"
          >
            Search Away
          </button>
        </form>
      </div>
    </>
  );
}

export default Landing;
