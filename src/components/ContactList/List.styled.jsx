import styled from 'styled-components';
const ListSecction = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  margin-top: 28px;
  padding: 0;
  list-style-type: none;
`;
const ListElement = styled.li`
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  color: #4e95bb;
  margin-bottom: 8px;
`;
const Button = styled.button`
  margin-left: 6px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
  border: none;
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
  background-color: #095077;
`;
export { ListSecction, ListElement, Button };
