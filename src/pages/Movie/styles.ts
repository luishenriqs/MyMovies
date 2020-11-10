import styled from 'styled-components';

export const WorkSpace = styled.div`
  background: #3d3d4d;
  padding: 60px;
  display: flex;
  align-items: center;
`;

export const MovieContainer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #312e38;
  border-radius: 5px;
  margin: auto;
  padding: 30px 0 60px 0;

    a {
      display: flex;
      font-size: 10px;
      padding: 10px;
      text-decoration: none;

      svg {
        color: #cbcbd6;
      }
      h1 {
        color: #cbcbd6;
      }
    }

    img {
      border-radius: 5px;
      margin-bottom: 15px;
      margin: 0 auto;
    }
  }
`;
