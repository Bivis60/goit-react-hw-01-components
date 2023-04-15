import styled from 'styled-components';

export const Table = styled.table`
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 16px;
  text-align: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #03c0e5;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
`;

export const Tr = styled.tr`
  background-color: #fff;
  :nth-child(2n) {
    background-color: #f9f9f9;
  }
`;

export const Th = styled.th`
  border: solid 1px #fff;
  padding: 8px 72px;
`;

export const Td = styled.td`
  color: #ababab;
  border: solid 1px lightgray;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 12px;
  text-transform: capitalize;
`;
