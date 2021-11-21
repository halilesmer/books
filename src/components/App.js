import React from "react";
import Booklist from "./Booklist.js";
import BookContextProvider from "../BookContext";

class App extends React.Component {
  render() {
    return (
      <>
        <BookContextProvider>
          <Booklist />
        </BookContextProvider>
      </>
    );
  }
}
export default App;
