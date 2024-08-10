import Header from './Header';
import { ThemeContext } from "./ThemeContextProvider";
import { useContext } from 'react';


export default function Page() {

  const themeContextConnection = React.useContext(ThemeContext);

  return (
    <div id="app" className={themeContextConnection.theme}>
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
