import styled from "styled-components";

export const StyleApp = styled.div`
  aside {
    padding: 0 1rem;

    h1 {
      padding: 1rem;
      font-size: 1rem;
      height: 65px;
      display: flex;
      align-items: center;
      border-radius: 7px 7px 0 0;
      background: var(--color-primary);
      color: white;
    }

    .div_text_cart-1 {
      padding: 1rem;
      background: var(--color-gray0);
      text-align: center;
      height: 150px;
      border-radius: 0px 0px 6px 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .div_text_cart-1 > p {
      color: var(--color-gray50);
    }

    .div_text_cart-2 {
      width: 140px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      border-bottom: 1px solid var(--color-gray20);
      overflow-y: auto;
      height: 371px;
      background-color: var(--color-gray0);
    }

    ul > li {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-top: 1rem;
      margin-bottom: 1rem;
      gap: 1rem;
    }

    ul > li > img {
      width: 70px;
      height: 70px;
      background: var(--color-gray20);
    }

    ul > li > button {
      margin-bottom: 20px;
      border: none;
      background-color: transparent;
      color: var(--color-gray20);
      cursor: pointer;
      transition: 0.8s;
    }

    ul > li > button:hover {
      color: var(--color-gray50);
      transition: 0.8s;
    }

    ul > li > div > p {
      color: var(--color-gray50);
    }

    .div_button_remove_all {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: var(--color-gray0);
      align-items: center;
    }

    .div_button_remove_all > button {
      width: 90%;
      height: 60px;
      margin-bottom: 15px;
      background-color: var(--color-gray20);
      border: 1px solid transparent;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.8s;
    }

    .div_button_remove_all > button:hover {
      background-color: var(--color-gray50);
      opacity: 70%;
      transition: 0.8s;
      color: var(--color-gray0);
    }

    .div_button_remove_all > h3 {
      margin-top: 10px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0rem 1rem;
    }
  }
  @media (min-width: 1024px) {
    .container {
      display: flex;
    }

    .ul_list > li > img {
      width: 298px;
      border-radius: 4px 4px 0px 0px;
    }

    .ul_list {
      flex-wrap: wrap;
      width: 67%;
      align-items: baseline;
      height: 87vh;

      ::-webkit-scrollbar {
        width: 9px;
      }
      ::-webkit-scrollbar-thumb {
        width: 9px;
        background-color: var(--color-gray20);
      }
    }

    aside {
      margin-top: 17px;
      width: 37%;
    }

    .ul_cart {
      width: 100%;
      overflow-x: auto;

      ::-webkit-scrollbar {
        width: 9px;
      }
      ::-webkit-scrollbar-thumb {
        width: 9px;
        background-color: var(--color-gray20);
      }
    }

    .div_container_cart-1 {
      height: 150px;
    }
  }

  @media (min-width: 1200px) {
    aside {
      width: 365px;
    }

    .container {
      justify-content: center;
    }

    .ul_list {
      height: 87vh;
      width: 70%;
      justify-content: center;

      ::-webkit-scrollbar {
        width: 9px;
      }
      ::-webkit-scrollbar-thumb {
        width: 9px;
        background-color: var(--color-gray20);
      }
    }

    .ul_list > li > img {
      width: 100%;
    }

    .ul_cart {
      ::-webkit-scrollbar {
        width: 9px;
      }
      ::-webkit-scrollbar-thumb {
        width: 9px;
        background-color: var(--color-gray20);
      }
    }
  }
`;
