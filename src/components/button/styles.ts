import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #e52905;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  font-size: 24px;
  font-weight: 500;
  margin-top: 16px;
  width: 100%;
  height: 56px;
  transition: 0.5s;
  color: #312e38;

  &:hover {
    background: ${shade(0.2, '#e52905')};
  }
`;
