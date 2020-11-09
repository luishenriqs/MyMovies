import styled from 'styled-components';

export const WorkSpace = styled.div`
  background: #3d3d4d;
  padding: 60px;
  display: flex;
  align-items: center;
`;

export const MovieContainer = styled.div`
  width: 1000px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: #312e38;
  border-radius: 5px;
  margin: auto;
  padding: 25px 0;
  a {
    width: 300px;
    height: 400px;
    display: flex;
    margin: 0 0 25px 25px;
    padding: 24px;
    background: #232129;
    border-radius: 5px;
    align-items: center;
    text-decoration: none;
    transition: transform 0.4s;

    /* & + a {
      margin-top: 16px;
    } */

    .content {
      strong {
        font-size: 20px;
        font-weight: bold;
        color: #cbcbd6;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      svg {
        margin-left: auto;
        color: #cbcbd6;
      }
    }
    &:hover {
      transform: translateX(10px);
    }
  }

  /* img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  } */
`;
