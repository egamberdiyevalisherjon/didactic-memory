import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Search = ({ products }) => {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <Header />
      <section id="search-products" className="min-vh-100 py-5 bg-light">
        <div className="container">
          <form className="my-3" onSubmit={(e) => e.preventDefault()}>
            <input
              value={text}
              onChange={handleChange}
              type="search"
              className="form-control"
              placeholder="Search..."
            />
          </form>
          <div className="row g-5 py-5">
            {products.map((p) => {
              return (
                p.title.toLowerCase().includes(text) && (
                  <div key={p.id} className="col-md-6 col-xl-3">
                    <div className="product">
                      <img src={p.image} alt={p.title} className="img-fluid" />
                      <div className="details bg-dark text-white p-3">
                        <span className="rating">
                          <i className="fa-solid fa-star text-warning"></i>
                          {p.rating.rate}/{p.rating.count}
                        </span>
                        <span className="price">${p.price}</span>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Search;
