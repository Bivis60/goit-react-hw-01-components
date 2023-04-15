import styled from 'styled-components';
import { getRandomHexColor } from './Statistics';

export const StatisticsSection = styled.section`
  width: max-content;
  max-width: 100%;
  margin: 16px auto;
  padding: 16px;
  border-radius: 6px;
  background-color: ${p => p.theme.colors.background};
  outline: 1px solid black;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Title = styled.h2`
  text-align: center;
  width: 100%;
  padding: 30px;
  text-transform: uppercase;
  background-color: #fff;
  outline: 1px solid black;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const StatList = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid black;
  background-color: ${p => getRandomHexColor(p.index)};
  padding: 8px 24px;
  border-radius: 5px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;
