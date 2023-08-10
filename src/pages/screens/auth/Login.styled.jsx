import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  height: 100vh;

  * {
    margin: 0;
    padding: 0;
  }

  .login-page {
    background-color: #1f1f1f;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-direction: column;
  }
  .logo {
    width: 30%;
  }

  .login-btn {
    width: 200px;
    padding: 15px 0px;
    text-align: center;
    background-color: #fefefe;
    border-radius: 50px;
    color: #1f1f1f;
    font-weight: 600;
    margin-top: 20%;
  }
  a {
    text-decoration: none;
  }
`;
