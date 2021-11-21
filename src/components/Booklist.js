import React from "react";
import './Booklist.css';
import Book from "./Book.js";

class Booklist extends React.Component {
  render() {
    //console.log(this.props.books);

    const bookList = this.props.books.map((book, i) => {
      //console.log('book: ', book);
      return <Book book={book} key={i} />;
    });
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">BookFolio</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">{bookList}</div>
        </div>
      </section>
    );
  }
}
export default Booklist;
