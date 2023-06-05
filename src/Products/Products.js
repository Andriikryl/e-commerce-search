import React from "react";
import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

export default function Products() {
  return (
    <>
      <section className="card-container">
        <article className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="sho"
          ></img>
          <div className="card-details">
            <h3 className="card-title">shoe</h3>
            <div className="card-reviews"></div>
          </div>
          <div>
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <span className="total-reviews">4</span>
          </div>
          <div className="card-price">
            <div className="price">
              <del>$300</del>
              <span>200</span>
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
