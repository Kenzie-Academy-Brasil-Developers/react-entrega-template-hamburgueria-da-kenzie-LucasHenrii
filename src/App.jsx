import { useEffect, useState, React } from "react";
import { Header } from "./Components/Header/Header";
import { ProductCart } from "./Components/productCart/ProductCart";
import { ProductList } from "./Components/ProductList/ProductList";
import { StyleApp } from "./Components/styleApp";
import { api } from "./Services/api";
import { Reset } from "./styles/reset";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productCart, setProductCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  const addProductCart = (product) => {
    if (!productCart.some((prod) => prod.id === product.id)) {
      const addProduct = [...productCart, product];
      setProductCart(addProduct);
      toast.success("Produto adicionado com sucesso!", {
        autoClose: 1800,
        position: "top-left",
      });
    } else {
      toast.warning("Produto já está na lista!", {
        autoClose: 1800,
        position: "top-left",
      });
    }
  };

  const removeProductCart = (productId) => {
    const newProductList = productCart.filter(
      (product) => product.id !== productId
    );
    toast.success("Produto removido com sucesso!", {
      autoClose: 1800,
      position: "top-left",
    });
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
    <StyleApp className="App">
      <Reset />
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        search={search}
        setSearch={setSearch}
      />
      <div className="container">
        <ProductList
          searchProduct={searchProduct}
          products={products}
          addProductCart={addProductCart}
        />
        <aside>
          <h1>Carrinho de compras</h1>

          {productCart.length > 0 ? (
            <ProductCart
              productCart={productCart}
              removeProductCart={removeProductCart}
              setProductCart={setProductCart}
            />
          ) : (
            <div className="div_text_cart-1">
              <h2>Sua sacola está vazia</h2>
              <p>Adicione itens</p>
            </div>
          )}
        </aside>
      </div>
    </StyleApp>
  );
}

export default App;
