import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  const toggleMode = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} toggleMode={toggleMode} />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
