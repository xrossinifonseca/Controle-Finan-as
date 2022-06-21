import styles from "./Form.module.css";
import { useState } from "react";
import Grid from "../../Grid/Grid";

function Form({ handleAdd, transactionsList, setTransactionsList }) {
  const [desc, setDesc] = useState("");
  const [amout, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  function handleSave() {
    if (!desc || !amout) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amout < 1) {
      alert("o valor precisa ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amout: amout,
      expense: isExpense,
    };
    handleAdd(transaction);

    setDesc("");
    setAmount("");
  }

  return (
    <>
      <div className={styles.form}>
        <div className={styles.input_content}>
          <label className={styles.form_content}>Descrição:</label>
          <input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div className={styles.input_content}>
          <label>Valor </label>
          <input
            value={amout}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className={styles.radio_group}>
          <input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
            className={styles.radio}
          />
          <label htmlFor="rIncome">Entrada</label>
          <input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
            className={styles.radio}
          />
          <label htmlFor="rExpenses">Saída</label>
          <button onClick={handleSave}>ADICIONAR</button>
        </div>
      </div>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
}

export default Form;
