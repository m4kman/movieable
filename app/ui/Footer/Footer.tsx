import React from "react";

function Footer() {
  return (
    <footer
      className="mb-4 mt-20 flex w-full max-w-6xl justify-between border-t pt-4 text-sm
        text-muted-foreground"
    >
      <span>
        Developed by{" "}
        <span className="cursor-pointer hover:text-foreground">m4kman</span>
      </span>
      <span className="cursor-pointer hover:text-foreground">GitHub</span>
    </footer>
  );
}

export default Footer;
