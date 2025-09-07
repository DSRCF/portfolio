"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "./ThemeProvider";

const ClientWrapper = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ClientWrapper; 