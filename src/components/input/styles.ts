import styled, { css } from 'styled-components';
// import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;
  border: 2px solid #232129;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ##e52905;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ##e52905;
      border-color: ##e52905;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ##e52905;
    `}

  input {
    background: transparent;
    color: #f4ede8;
    border: 0;
    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

// export const Error = styled(Tooltip)`
//   height: 20px;
//   margin-left: 16px;

//   svg {
//     margin: 0;
//   }

//   span {
//     background: #c53030;
//     color: #fff;

//     &::before {
//       content: '';
//       border-color: #c53030 transparent;
//     }
//   }
// `;
