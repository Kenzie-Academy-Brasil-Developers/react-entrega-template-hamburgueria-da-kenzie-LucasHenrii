import { useState } from "react";
import logo from "../../assets/logo.svg";
import { StyleHeader } from "./styleHeader";

export const Header = ({
  filteredProducts,
  setFilteredProducts,
  search,
  setSearch,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const submit = (event) => {
    event.preventDefault();

    setFilteredProducts(searchInput);
    setSearchInput("");
  };
  return (
    <StyleHeader>
      <img src={logo} alt="Logo" />

      <form onSubmit={submit}>
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value.toLowerCase())}
          type="text"
          placeholder="Digitar pesquisa"
        />
        <button type="submit">Pesquisar</button>
      </form>
    </StyleHeader>
  );
};
