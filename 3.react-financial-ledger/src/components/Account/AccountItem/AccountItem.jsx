import {
  Content,
  Item,
  ItemContainer,
  Date,
  Amount,
  Info,
  Description,
} from "./style";

const AccountItem = ({ expense, onClick }) => {
  return (
    <ItemContainer onClick={onClick}>
      <Content>
        <Item>{expense.item}</Item>
        <Description>{expense.description}</Description>
      </Content>
      <Info>
        <Date>{expense.date}</Date>
        <Amount>{expense.amount.toLocaleString()}원</Amount>
      </Info>
    </ItemContainer>
  );
};

export default AccountItem;
