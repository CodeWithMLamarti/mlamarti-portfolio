"use client";

import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative z-50 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
    >
      {theme === "dark" ? (
        <IconSun className="h-5 w-5 text-yellow-400" />
      ) : (
        <IconMoon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
}
