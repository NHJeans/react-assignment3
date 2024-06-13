import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  ButtonContainer,
  Container,
  Detail,
  DetailItem,
  Input,
  Label,
} from "./style";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getExpense, putExpense, deleteExpense } from "../../apis/expense";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: selectedExpense } = useQuery({
    queryKey: ["expenses", id],
    queryFn: getExpense,
  });
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedExpense) {
      setDate(selectedExpense.date);
      setItem(selectedExpense.item);
      setAmount(selectedExpense.amount);
      setDescription(selectedExpense.description);
    }
  }, [selectedExpense]);

  const mutationEdit = useMutation({
    mutationFn: putExpense,
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries(["expenses"]);
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      navigate("/");
    },
  });

  const editExpense = () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }
    if (!item || amount <= 0) {
      alert("유효한 항목과 금액을 입력해주세요.");
      return;
    }
    const newExpenses = {
      id,
      date,
      item,
      amount: Number(amount),
      description,
    };
    mutationEdit.mutate(newExpenses);
  };

  const handleDelete = () => {
    mutationDelete.mutate(id);
  };

  return (
    <Container>
      <Detail>
        <DetailItem>
          <Label>날짜:</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </DetailItem>
        <DetailItem>
          <Label>항목:</Label>
          <Input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </DetailItem>
        <DetailItem>
          <Label>금액:</Label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </DetailItem>
        <DetailItem>
          <Label>내용:</Label>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DetailItem>
        <ButtonContainer>
          <Button onClick={editExpense}>수정</Button>
          <Button onClick={handleDelete}>삭제</Button>
          <Button onClick={() => navigate("/")}>뒤로가기</Button>
        </ButtonContainer>
      </Detail>
    </Container>
  );
};

export default DetailPage;
