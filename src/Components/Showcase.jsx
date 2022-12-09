import React from "react";

const Showcase = () => {
  return (
    <div>
      <section id="showcase" className="bg-light py-5">
        <div className="container py-5 my-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-1">Collections</h1>
              <p className="text-capitalize">
                you can explore ans shop many differnt collection <br />
                from various barands here.
              </p>
              <a href="#" className="btn btn-dark">
                Shop now
              </a>
            </div>
            <div className="col-lg-6">
              <img src="/images/showcase.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" id="brands">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="">
              <img src="/images/brand-1.svg" alt="" />
            </div>
            <div className="">
              <img src="/images/brand-2.svg" alt="" />
            </div>
            <div className="">
              <img src="/images/brand-3.svg" alt="" />
            </div>
            <div className="">
              <img src="/images/brand-4.svg" alt="" />
            </div>
            <div className="">
              <img src="/images/brand-5.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
