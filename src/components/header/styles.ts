import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 56px;

  #logo {
    display: flex;
    width: 90%;
    background: #c53030;
    border-radius: 5px;

    img {
      width: 300px;
      height: 82px;
    }

    a {
      margin: 15px 0 15px 50px;
      color: #ff9000;
      font-size: 22px;
      text-decoration: none;

      &:hover {
        font-size: 26px;
      }
    }
  }

  #login {
    padding: 5px;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ff9000;
    border-radius: 5px 0 0 5px;
    h4 {
      color: #312e38;
      font-size: 20px;
    }
    span {
      color: #312e38;
      font-size: 20px;
    }
  }

  button {
    width: 120px;
    background: #c53030;
    color: #ff9000;
    font-weight: bold;
    font-size: 24px;
    border: 0;
    border-radius: 0 5px 5px 0;
  }
`;
