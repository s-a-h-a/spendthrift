"use client";

import { type FC, useEffect, useState } from "react";

import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

/** Handles the setting and toggling of the application theme */
const DarkModeToggle: FC = () => {
  // Defaulting to
  const [theme, setTheme] = useState(() => {
    // Check if there's something in localStorage
    const storedTheme = localStorage.getItem("data-theme");
    if (storedTheme) return storedTheme;

    // Else see what the browser default is set to
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // On first render try to set theme from local storage
  useEffect(() => {
    const container = document.getElementById("root");
    if (!container) return;
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
};

export default DarkModeToggle;
