"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Input } from "@/app/ui/input";
import { Button } from "@/app/ui/button";
import heroImg from "@/public/assets/hero-bg.jpg";

function Hero() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  }
  return (
    <div className="relative mt-14 grid aspect-video w-full place-items-center">
      <Image
        src={heroImg}
        alt="Collage of movie posters"
        className="absolute h-full w-full rounded-lg object-cover brightness-[.55]"
      />
      <div className="isolate flex flex-col items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          What will you watch next?
        </h1>
        <form onSubmit={handleSubmit} className="mt-8 flex min-w-[90%] gap-3">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            name="search"
            type="text"
            className="px-4 py-7 text-xl backdrop-brightness-[.25] backdrop-contrast-[1.125]"
            placeholder="Find your next movie or TV show"
          />
          <Button type="submit" className="px-8 py-7 text-xl">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
