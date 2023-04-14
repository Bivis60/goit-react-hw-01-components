import styled from 'styled-components';

export const ProfileCard = styled.div`
  border: solid 4px #212121;
  width: 268px;
  margin: 0 auto;
  border-radius: 12px;
  padding: 16px;
  background-color: ${p => p.theme.colors.background};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const Tag = styled.p`
  color: gray;
  font-size: 18px;
`;

export const Location = styled.p`
  color: gray;
  font-size: 16px;
`;

export const Stats = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d0d5ed;
  padding: 8px 12px;
  border-radius: 6px;
`;

export const Label = styled.span`
  color: #705d5d;
  font-size: 12px;
`;

export const Quantity = styled.span`
  color: ${p => p.theme.colors.text};
  font-size: 16px;
  font-weight: 700;
`;
