export const ProductCart = ({
  productCart,
  removeProductCart,
  setProductCart,
}) => {
  const sum = productCart.reduce((previous, productValue) => {
    return previous + productValue.price;
  }, 0);

  return (
    <ul>
      {productCart.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt="img" />
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <button onClick={() => removeProductCart(product.id)}>Remover</button>
        </li>
      ))}
      <div>
        <h3>Total: {sum}</h3>
        <button onClick={() => setProductCart([])}>Remover tudo</button>
      </div>
    </ul>
  );
};
