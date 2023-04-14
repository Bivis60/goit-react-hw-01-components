import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: space-around;
  gap: 24px;
  padding: 8px 32px;
  background-color: ${p => p.theme.colors.background};
  outline: 1px solid black;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Span = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => {
    return props.active ? props.theme.colors.green : props.theme.colors.accent;
  }};
`;

export const Name = styled.p`
font-size: 20px;
font-weight: 700;
`;