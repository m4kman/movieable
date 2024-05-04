"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

import { Input } from "@/app/ui/input";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/ui/navigation-menu";

import useWindowSize from "@/app/lib/useWindowSize";

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

  const windowSize = useWindowSize();

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
          <div className="flex items-center ~gap-4/8">
            <Link className="font-bold italic ~text-xl/2xl" href="/">
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
                className="max-w-96 py-4 pl-10 ~w-48/96 ~text-sm/base"
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

          <div className="flex ~gap-4/8">
            {windowSize !== undefined ? (
              windowSize.width >= 900 ? (
                navItems.map((navItem: any, idx: number) => (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    className="flex items-center tracking-wide text-neutral-600 hover:text-neutral-500
                      dark:text-neutral-50 dark:hover:text-neutral-300"
                  >
                    <span className="text-sm font-medium">{navItem.name}</span>
                  </Link>
                ))
              ) : (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[130px] gap-4 p-4">
                          {navItems.map((navItem: any, idx: number) => (
                            <Link
                              key={`link=${idx}`}
                              href={navItem.link}
                              className="flex items-center tracking-wide text-neutral-600 hover:text-neutral-500
                                dark:text-neutral-50 dark:hover:text-neutral-300"
                            >
                              <span className="text-sm font-medium">
                                {navItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              )
            ) : null}
          </div>
        </motion.div>
      </nav>
    </>
  );
}

export default Navbar;
