import styled from "styled-components";

export const StyleProductList = styled.ul`
  display: flex;

  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
  list-style: none;
  align-items: center;

  li {
    width: 300px;
    border: 2px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
  }

  img {
    width: 215px;
    height: 150px;
    object-fit: contain;
    background: #f5f5f5;
  }

  li > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    gap: 1rem;
    width: 100%;
  }

  li > div > button {
    width: 106px;
    height: 40px;
    background-color: #27ae60;
    color: white;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
  }

  span {
    color: #27ae60;
  }
`;
