import React from "react";

const NewProducts = ({ products }) => {
  return (
    <section id="new-products" className="py-5">
      <h2 className="text-center my-5">New products</h2>
      <div className="container">
        <div className="row g-5">
          {products.map(
            (p) =>
              p.price > 60 &&
              p.price < 700 && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
