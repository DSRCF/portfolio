"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="bg-transparent border-white/20 hover:bg-white/10 dark:border-white/20 dark:hover:bg-white/10 border-gray-300 hover:bg-gray-100 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-white" />
      ) : (
        <Moon className="h-4 w-4 text-gray-800" />
      )}
    </Button>
  );
};

export default ThemeToggle; 