import "./styles.css";

import React, { createContext, useState, useContext } from "react";

// Step 1: Create a context object
const ThemeContext = createContext();

// Step 2: Create a provider component
function ThemeProvider({ children }) {
  // State to hold the current theme
  console.log(children);
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

function Header() {
  // Step 4: Use the useContext hook to access the shared data
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Theme Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </header>
  );
}

function MainContent() {
  // Use the useContext hook to access the shared data
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <section>
        <h2>Main Content</h2>
        <p>This is the main content area.</p>
        <p>Current Theme: {theme}</p>
      </section>
    </main>
  );
}
