import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  height: 129px;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  form {
    width: 95%;
    height: 60px;
    background: #ffffff;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    justify-content: space-between;
  }

  button {
    height: 40px;
    width: 107px;
    background-color: #27ae60;
    color: white;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
  }

  input {
    height: 40px;
    border: 1px solid transparent;
    outline: none;
  }

  input::placeholder {
    color: #e0e0e0;
  }

  @media (min-width: 1024px) {
    flex-direction: initial;
    justify-content: space-between;
    padding: 0 1rem;
    height: 80px;

    form {
      width: 385px;
    }
  }

  @media (min-width: 1200px) {
    padding: 0px 4rem 0 7rem;
  }
`;
