import { ThemeContext } from "../store/theme-context";
import { useContext } from "react";


export default function Header() {

  const themeContextConnection  = useContext(ThemeContext);

    return (
      <header>
        <h1>Demo Website</h1>
        <button onClick={() => themeContextConnection.toggleTheme()}>Toggle Theme</button>
      </header>
    );
  }
  