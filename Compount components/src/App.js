import React, { createContext, useContext, useState } from "react";

// Create a context for the FlyOut component
const MenuContext = createContext();

// FlyOut component that manages the menu state
export function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu`}>
      <MenuContext.Provider value={{ isOpen, toggleMenu }}>
        {children}
      </MenuContext.Provider>
    </div>
  );
}

// ToggleButton component to toggle the menu
function ToggleButton() {
  const { isOpen, toggleMenu } = useContext(MenuContext);

  return (
    <button className="menu-btn" onClick={toggleMenu}>
      {isOpen ? "Close Menu" : "Open Menu"}
    </button>
  );
}

// MenuItem component to display menu items
function MenuItem({ children }) {
  const { isOpen } = useContext(MenuContext);

  return isOpen && <div className="menu-item">{children}</div>;
}

// App component using the Menu, ToggleButton, and MenuItem components
function App() {
  return (
    <Menu>
      <ToggleButton />
      <MenuItem>Option 1</MenuItem>
      <MenuItem>Option 2</MenuItem>
      <MenuItem>Option 3</MenuItem>
    </Menu>
  );
}

export default App;
