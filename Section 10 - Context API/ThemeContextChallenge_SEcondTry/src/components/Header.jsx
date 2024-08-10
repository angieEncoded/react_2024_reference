import { ThemeContext } from "./ThemeContextProvider";
import { useContext } from "react";


export default function Header() {

  const themeContextConnection  = React.useContext(ThemeContext);

    return (
      <header>
        <h1>Demo Website</h1>
        <button onClick={() => themeContextConnection.toggleTheme()}>Toggle Theme</button>
      </header>
    );
  }
  