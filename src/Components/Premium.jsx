import React from "react";

const Premium = ({ products }) => {
  return (
    <section id="premium" className="py-5">
      <h2 className="text-center my-5">Our premium products</h2>
      <div className="container">
        {products
          .sort((a, b) => b.price - a.price)
          .slice(0, 5)
          .map((p) => {
            return (
              <div key={p.id} className="product">
                <img src={p.image} alt={p.title} className="img-fluid" />
                <div className="details bg-dark text-white p-3">
                  <span className="rating">
                    <i className="fa-solid fa-star text-warning"></i>
                    {p.rating.rate}/{p.rating.count}
                  </span>
                  <span className="price">${p.price}</span>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Premium;
