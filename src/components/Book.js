import React from "react";
import "./Book.css";


class Book extends React.Component {
    render() {

        return (
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 1  */}
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal1"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={this.props.book.imageURL}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  {this.props.book.title}
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  {this.props.book.author}
                </div>
              </div>
            </div>
          </div>
        );
   
    }
}
export default Book;


/*  <div class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 1-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Threads</div>
                                <div class="portfolio-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </div> */