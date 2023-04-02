import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const ProductCart = ({
  productCart,
  removeProductCart,
  setProductCart,
}) => {
  const sum = productCart.reduce((previous, productValue) => {
    return previous + productValue.price;
  }, 0);

  const notify = () =>
    toast.success("Produtos removidos com sucesso!", {
      autoClose: 1800,
      position: "top-left",
    });

  return (
    <>
      <ul className="ul_cart">
        {productCart.map((product) => (
          <li key={product.id}>
            <img src={product.img} alt="img" />
            <div className="div_text_cart-2">
              <h3>
                {product.name.length > 15
                  ? `${product.name.substr(0, 15)}...`
                  : product.name}
              </h3>
              <p>{product.category}</p>
            </div>
            <button onClick={() => removeProductCart(product.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      <div className="div_button_remove_all">
        <h3>
          Total:{" "}
          <strong>
            {" "}
            {sum.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </h3>
        <ToastContainer />
        <button onClick={() => notify(setProductCart([]))}>Remover tudo</button>
      </div>
    </>
  );
};
