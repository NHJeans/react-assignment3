import { Form, Label, Input, Button, FormContainer } from "./style";
import { useSelector } from "react-redux";
import { postExpense } from "../../../apis/expense";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountForm = () => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const user = useSelector((state) => state.auth.user);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      navigate(0);
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!date || !item || !amount || !description) {
      return alert("모든 항목을 입력해주세요.");
    }

    const newExpense = {
      id: crypto.randomUUID(),
      month: parseInt(date.split("-")[1], 10),
      date,
      item,
      amount: parseInt(amount, 10),
      description,
      createdBy: user,
    };
    mutation.mutate(newExpense);
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Label>날짜</Label>
        <Input
          type="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <Label>항목</Label>
        <Input
          type="text"
          value={item}
          placeholder="지출 항목"
          required
          onChange={(e) => setItem(e.target.value)}
        />
        <Label>금액</Label>
        <Input
          type="number"
          value={amount}
          placeholder="지출 금액"
          required
          onChange={(e) => setAmount(e.target.value)}
        />
        <Label>지출 내용</Label>
        <Input
          type="text"
          value={description}
          placeholder="지출 내용"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">저장</Button>
      </Form>
    </FormContainer>
  );
};

export default AccountForm;
