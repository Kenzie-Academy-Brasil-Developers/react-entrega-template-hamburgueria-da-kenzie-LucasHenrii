import { StyleProductList } from "./styleProductList";

export const ProductList = ({ products, addProductCart, searchProduct }) => {
  return (
    <>
      <StyleProductList className="ul_list">
        {searchProduct.map((product) => (
          <li key={product.id}>
            <img src={product.img} alt="" />
            <div>
              <h3>
                {product.name.length > 15
                  ? `${product.name.substr(0, 15)}...`
                  : product.name}
              </h3>
              <p>{product.category}</p>
              <span>
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button onClick={() => addProductCart(product)}>Adicionar</button>
            </div>
          </li>
        ))}
      </StyleProductList>
    </>
  );
};
