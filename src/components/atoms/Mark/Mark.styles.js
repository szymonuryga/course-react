import styled from 'styled-components';

export const StyledAverage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: ${({ mark, theme }) =>
    mark <= 3
      ? theme.colors.error
      : mark <= 4
      ? theme.colors.warning
      : theme.colors.success};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
