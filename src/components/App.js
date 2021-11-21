import React from "react";
import Booklist from "./Booklist.js";
import BookContextProvider from "../BookContext";
import ThemeContextProvider from "../ThemeContext";

class App extends React.Component {
  render() {
    return (
      <>
        <ThemeContextProvider>
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
        </ThemeContextProvider>
      </>
    );
  }
}
export default App;
