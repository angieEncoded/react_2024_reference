import { createContext } from "react"
import { useState } from "react"

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {} // dummy
})

export default function ThemeContextProvider(props) {
    
  const [theme, setTheme] = useState({
    theme: "light"
  })

  // Handle toggling the theme inside the provider
  const handleToggleTheme = () => {
    setTheme((previousTheme) => previousTheme.theme === "light" ? {theme:"dark"} : {theme:"light"})
    console.log(theme)
  }

  const contextValues = {
    theme: theme.theme, // this needs to provide the actual state value
    toggleTheme: handleToggleTheme
  }

  return (
    <ThemeContext.Provider value={contextValues}>
      {props.children}
    </ThemeContext.Provider>
  )

  }
  