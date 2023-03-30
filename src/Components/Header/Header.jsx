import logo from "../../assets/logo.svg";

export const Header = ({ filteredProducts, setFilteredProducts }) => {
  return (
    <header>
      <img src={logo} alt="" />

      <div>
        <input
          value={filteredProducts}
          onChange={(event) =>
            setFilteredProducts(event.target.value.toLowerCase())
          }
          type="text"
        />
        <button>Pesquisar</button>
      </div>
    </header>
  );
};
