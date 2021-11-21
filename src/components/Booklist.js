import React from "react";
import './Booklist.css';
import Book from "./Book.js";
import BookContext from "../BookContext";

class Booklist extends React.Component {
  
  static contextType = BookContext;
  
  render() {
    const books = this.context;
    console.log('BookContext: ', this.context);
  
    /* const bookList = this.props.books.map((book, i) => {
      //console.log('book: ', book);
      return <Book book={book} key={i} />;
    }); */
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">BookFolio</h2>
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
    );
  }
}
export default Booklist;


/* <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">BookFolio</h2>
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
      </section> */