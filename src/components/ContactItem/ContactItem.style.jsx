import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  padding: 4px 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0 0 1px 0 ${({ theme }) => theme.colors.accent};
  background-color: rgba(0, 0, 0, 0.105);
`;
export const TextWrap = styled.div`
  display: flex;
  gap: 10px;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
