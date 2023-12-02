import * as React from 'react';

function Landing() {
  return (
    <div className="grid gap-24  place-content-center">
      <main>
        <h1 className="text-6xl">Your one-stop-search for movies</h1>
      </main>
      <form className="grid gap-9">
        <input
          className="p-4 rounded-lg bg-indigo-3 placeholder-slate-11 border border-indigo-8 text-xl"
          type="text"
          placeholder="Search for a movie"
        />
        <button
          className="rounded-lg bg-indigo-3 mx-auto p-5 text-xl border border-indigo-8"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          Search Away
        </button>
      </form>
    </div>
  );
}

export default Landing;
