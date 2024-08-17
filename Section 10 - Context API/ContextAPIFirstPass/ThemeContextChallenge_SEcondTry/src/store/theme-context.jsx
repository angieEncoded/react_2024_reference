import { createContext } from "react"
import { useState, createContext } from "react"

export const ThemeContext = React.createContext({
  theme: "",
  toggleTheme: () => {} // dummy
})

export default function ThemeContextProvider(props) {
    
  const [theme, setTheme] = React.useState("light")

  // Handle toggling the theme inside the provider
  function handleToggleTheme() {
      
    if(theme === "light"){
        setTheme("dark")
    } else {
        setTheme("light")
    }
    
  }

  const contextValues = {
    theme: theme, // this needs to provide the actual state value
    toggleTheme: handleToggleTheme
  }

  return (
    <ThemeContext.Provider value={contextValues}>
      {props.children}
    </ThemeContext.Provider>
  )

  }
  