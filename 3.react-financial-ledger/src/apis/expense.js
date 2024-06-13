import { jsonApi } from "./axios";

export const getExpenses = async () => {
  try {
    const { data } = await jsonApi.get('/expenses');
    return data;
  } catch (err) {
    alert(err?.response?.data?.message);
    throw err;
  }
}
export const getExpense = async ({ queryKey }) => {
  const id = queryKey[1];
  try {
    const { data } = await jsonApi.get(`/expenses/${id}`);
    return data;
  } catch (err) {
    alert(err?.response?.data?.message);
    throw err;
  }
};


export const postExpense = async (newExpense) => {
  try {
    const { data } = await jsonApi.post('/expenses', newExpense);
    return data;
  } catch (err) {
    alert(err?.response?.data?.message);
    throw err;
  }
}

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const { data } = await jsonApi.put(
      `/expenses/${id}`, rest);
    return data;
  } catch (err) {
    alert('데이터가 수정되지 않았어요');
    throw err;
  }
}

export const deleteExpense = async (id) => {
  try {
    const { data } = await jsonApi.delete(
      `/expenses/${id}`);
    return data;
  } catch (err) {
    alert("데이터가 삭제되지 않아요");
    throw err;
  }
}
