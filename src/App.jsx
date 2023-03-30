import { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { ProductCart } from "./Components/productCart/ProductCart";
import { ProductList } from "./Components/ProductList/ProductList";
import { api } from "./Services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [productCart, setProductCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addProductCart = (product) => {
    if (!productCart.some((prod) => prod.id === product.id)) {
      const addProduct = [...productCart, product];
      setProductCart(addProduct);
    } else {
      console.log("Intem já está na lista");
    }
  };

  const removeProductCart = (productId) => {
    const newProductList = productCart.filter(
      (product) => product.id !== productId
    );
    setProductCart(newProductList);
  };

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  }, []);

  const searchProduct = products.filter(
    (product) =>
      product.name.toLowerCase().includes(filteredProducts) ||
      product.category.toLowerCase().includes(filteredProducts)
  );

  return (
    <div className="App">
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductList
        searchProduct={searchProduct}
        products={products}
        addProductCart={addProductCart}
      />
      <aside>
        <div>
          <h1>Carrinho de compras</h1>
        </div>
        {productCart.length > 0 ? (
          <ProductCart
            productCart={productCart}
            removeProductCart={removeProductCart}
            setProductCart={setProductCart}
          />
        ) : (
          <div>
            <h2>Sua sacola está vazia</h2>
            <p>Adicione itens</p>
          </div>
        )}
      </aside>
    </div>
  );
}

export default App;
