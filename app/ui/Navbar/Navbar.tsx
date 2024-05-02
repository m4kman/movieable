"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

import { Input } from "@/app/ui/input";

const navItems = [
  {
    name: "Action",
    link: "/tag/28",
  },
  {
    name: "Crime",
    link: "/tag/80",
  },
  {
    name: "Drama",
    link: "/tag/18",
  },
  {
    name: "Mystery",
    link: "/tag/9648",
  },
  {
    name: "Sci-Fi",
    link: "/tag/878",
  },
];

function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search?q=${search}`);
    setSearch("");
  }
  return (
    <>
      <nav className="mb-14 border-b border-border/50">
        <motion.div
          initial={{
            y: -100,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex justify-between gap-8 pb-5 pt-6"
        >
          <div className="flex items-center gap-8">
            <Link className="text-2xl font-bold italic" href="/">
              Movieable
            </Link>
            <form
              onSubmit={handleSearch}
              className="relative flex items-center"
            >
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                spellCheck={false}
                required
                className="w-96 max-w-96 py-4 pl-10 text-base"
                placeholder="Search for a movie or TV show"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="rgba(252,252,253, .5)"
                className="absolute ml-3 h-5 w-5 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </form>
          </div>

          <div className="flex gap-14">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className="flex items-center tracking-wide text-neutral-600 hover:text-neutral-500
                  dark:text-neutral-50 dark:hover:text-neutral-300"
              >
                <span className="hidden sm:block">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </>
  );
}

export default Navbar;
