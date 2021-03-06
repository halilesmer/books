import React from "react";
import "../BookList.css";
import Book from "./Book";
import { BookContext } from "../BookContext.js";
import { ThemeContext } from "../ThemeContext.js";

class BookList extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => {
          return (
            <BookContext.Consumer>
              {(contextBook) => {
                const { changeTheme, isDarkTheme, dark, light } = contextTheme;
                const { books } = contextBook;
                const theme = isDarkTheme ? dark : light;

                return (
                  <>
                    <section
                      className="page-section"
                      style={{ background: theme.bg, color: theme.txt }}
                      id="portfolio"
                    >
                      <div className="container">
                        <div className="text-center">
                          <button
                            type="button"
                            className="btn btn-info"
                            style={{ marginBottom: "2rem" }}
                            onClick={changeTheme}
                          >
                            Change Theme
                          </button>
                          <h2 className="section-heading text-uppercase">
                            BookFolio
                          </h2>
                          <h3 className="section-subheading text-muted">
                            Lorem ipsum dolor sit amet consectetur.
                          </h3>
                        </div>
                        <div className="row">
                          {books.map((book, i) => {
                            return <Book book={book} key={i} />;
                          })}
                        </div>
                      </div>
                    </section>
                  </>
                );
              }}
            </BookContext.Consumer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default BookList;


