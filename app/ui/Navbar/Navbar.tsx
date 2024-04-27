"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <>
      <nav className="">
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
          className="flex justify-between gap-8 py-6"
        >
          <Link className="text-2xl font-bold italic" href="/">
            Movieable
          </Link>
          <div className="flex gap-14 text-lg">
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
