import AccountItem from "../AccountItem";
import { List, NullData } from "./style";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getExpenses } from "../../../apis/expense";

const AccountList = () => {
  // const expenses = useSelector((state) => state.expenses.expenses);
  const selectedMonth = useSelector((state) => state.expenses.selectedMonth);
  const navigate = useNavigate();

  const { data: expenses = [], isLoading } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });
  // useQuery를 사용하여 키값을 넣어주고 queryFn에 getExpenses를 넣어준다.
  if (isLoading) return <div>로딩중입니다...</div>;

  const filteredExpenses = expenses.filter(
    (expense) => parseInt(expense.date.split("-")[1], 10) === selectedMonth
  );
  return (
    <List>
      {filteredExpenses.length === 0 ? (
        <NullData>{selectedMonth}월 지출 내역이 없습니다 </NullData>
      ) : (
        filteredExpenses.map((expense) => (
          <AccountItem
            onClick={() => {
              navigate(`/detail/${expense.id}`);
            }}
            key={expense.id}
            expense={expense}
          />
        ))
      )}
    </List>
  );
};
export default AccountList;
