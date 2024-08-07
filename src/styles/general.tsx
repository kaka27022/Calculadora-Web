import styled from "styled-components"

export const CalculatorContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 200px;
  margin: auto;
`;

export const Button = styled.button`
    background-color: #181C2A;
    color: white;
    border: none;
    padding: 17px, 75px, 21px, 75px;
    font-size: 48px;
    font-family: Inter;
    cursor: pointer;

    &:hover {
        background-color: #181C2A;
    }
`

export const Display = styled.div`
  grid-column: span 4;
  background-color: #252D4A;
  color: white;
  text-align: right;
  padding: 10px;
  font-size: 55px;
  font-family: Inter;
  width: 768px;
  height: 96px;
  margin-bottom: 20px;
`;


export const EqualButton = styled(Button)`
    grid-row: span 2;

`

export const ZeroButton = styled(Button)`
    grid-column: span 2;
`


