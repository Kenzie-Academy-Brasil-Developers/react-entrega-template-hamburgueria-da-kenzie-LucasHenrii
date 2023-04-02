import styled from "styled-components";

export const StyleProductList = styled.ul`
  display: flex;
  margin-bottom: 10px;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
  list-style: none;
  align-items: center;

  li {
    width: 300px;
    border: 2px solid var(--color-gray20);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
  }

  img {
    width: 215px;
    height: 150px;
    object-fit: contain;
    background: var(--color-gray0);
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
    background-color: var(--color-primary);
    color: white;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.8s;
  }

  li > div > P {
    color: var(--color-gray50);
  }

  li > div > button:hover {
    opacity: 70%;
    transition: 0.8s;
  }

  span {
    color: var(--color-primary);
  }
`;
