import { useEffect, useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Resume from "../components/Resume";
import { api } from "../api";

const Dashboard = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [transactionsList, setTransactionsList] = useState([]);

  async function getTransactions() {
    try {
      const res = await api.get("/transacoes");
      setTransactionsList(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.type === "saida")
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => item.type === "entrada")
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = async (transaction) => {
    try {
      const data = await api.post("/transacoes", {
        amount: Number(transaction.amount),
        type: transaction.expense === true ? "saida" : "entrada",
        userId: localStorage.getItem("userId"),
        categoria: transaction.desc,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Falha ao adicionar transação");
    }
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </>
  );
};

export default Dashboard;
