"use client";

import { useEffect, useState } from "react";

import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

/** Handles the setting and toggling of the application theme */
export default function DarkModeToggle() {
  const [theme, setTheme] = useState<null | "dark" | "light">(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("data-theme");
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark"))
      setTheme(storedTheme);
    else {
      // Else see what the browser default is set to
      setTheme(
        window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    }
  }, []);

  // On first render try to set theme from local storage
  useEffect(() => {
    const container = document.getElementById("root");
    if (!container || !theme) return;
    container.setAttribute("data-theme", theme);
  }, [theme]);

  const onClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("data-theme", newTheme);
  };

  return (
    <button onClick={onClick} className="btn btn-square btn-sm">
      {theme === "dark" && <IconMoonFilled size={18} />}
      {theme === "light" && <IconSunFilled size={18} />}
    </button>
  );
}
