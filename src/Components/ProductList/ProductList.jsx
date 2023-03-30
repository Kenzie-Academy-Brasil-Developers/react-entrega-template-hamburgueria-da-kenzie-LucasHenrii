export const ProductList = ({ products, addProductCart, searchProduct }) => {
  return (
    <>
      <ul>
        {searchProduct.map((product) => (
          <li key={product.id}>
            <img src={product.img} alt="" />
            <div>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <span>{product.price}</span>
              <button onClick={() => addProductCart(product)}>Adicionar</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
