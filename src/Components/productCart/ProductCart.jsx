export const ProductCart = ({
  productCart,
  removeProductCart,
  setProductCart,
}) => {
  const sum = productCart.reduce((previous, productValue) => {
    return previous + productValue.price;
  }, 0);

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
        <button onClick={() => setProductCart([])}>Remover tudo</button>
      </div>
    </>
  );
};
