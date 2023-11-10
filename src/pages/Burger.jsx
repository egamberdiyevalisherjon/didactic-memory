import React, { useRef } from "react";

const Burger = () => {
  let burger = useRef(null);
  let topBread = useRef(null);
  let total = useRef();

  let prices = {
    cheese: 2,
    meat: 5,
    onion: 1,
    salad: 1,
    tomato: 2,
    pickle: 3,
    bread: 2,
  };

  let btnClick = (e) => {
    let className = e.target.className;
    let price = prices[className];

    let img = document.createElement("img");
    img.classList.add(className);
    img.setAttribute("src", `/burger-layers/${className}.svg`);
    burger.current.insertBefore(img, topBread.current);

    total.current.innerHTML = +total.current.innerHTML + price;

    img.addEventListener("click", (e) => {
      e.target.remove();
      total.current.innerHTML = total.current.innerHTML - price;
    });
  };

  return (
    <div class="flex">
      <div ref={burger} class="burger-wrapper">
        <img
          ref={topBread}
          class="bottom-bread"
          src="/burger-layers/bottom-bread.svg"
        />
        <img class="top-bread" src="/burger-layers/top-bread.svg" />
      </div>
      <div class="btns">
        <ul>
          <li>Cheese - $2</li>
          <li>Meat - $5</li>
          <li>Onion - $1</li>
          <li>Salad - $1</li>
          <li>Tomato - $2</li>
          <li>Pickle - $3</li>
          <li>Bread - $2</li>
        </ul>
        <br />
        <button onClick={btnClick} class="cheese">
          Cheese
        </button>
        <button onClick={btnClick} class="meat">
          Meat
        </button>
        <button onClick={btnClick} class="onion">
          Onion
        </button>
        <button onClick={btnClick} class="salad">
          Salad
        </button>
        <button onClick={btnClick} class="tomato">
          Tomato
        </button>
        <button onClick={btnClick} class="pickle">
          Pickle
        </button>
        <br />
        <br />
        <hr />
        <br />
        <h1>
          Total: $
          <span ref={total} class="total">
            2
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Burger;
