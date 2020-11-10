import styled from 'styled-components';

export const WorkSpace = styled.div`
  background: #3d3d4d;
  padding: 60px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 1300px;
  background: #312e38;
  border-radius: 5px;
  margin: auto;
  padding: 25px 0;

  a {
    display: flex;
    justify-content: start;
    height: 15px;
    text-decoration: none;

    svg {
      color: #cbcbd6;
      margin-left: 15px;
    }
    h2 {
      font-size: 20px;
      color: #cbcbd6;
      margin-left: 5px;
    }
  }

  h1 {
    display: flex;
    justify-content: center;
    padding: 25px;
  }
`;

export const MovieContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  a {
    width: 400px;
    height: 650px;
    display: flex;
    flex-direction: column;
    margin: 0 0 25px 25px;
    padding: 24px;
    background: #232129;
    border-radius: 5px;
    align-items: center;
    text-decoration: none;
    transition: transform 0.4s;

    img {
      border-radius: 5px;
      margin-bottom: 25px;
    }

    strong {
      font-size: 20px;
      font-weight: bold;
      color: #cbcbd6;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
`;
