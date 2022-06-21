import styles from "./Grid.module.css";
import GridItem from "./GridItem";

function Grid({ itens, setItens }) {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);

    localStorage.setItem("transactions", JSON.stringify(newArray));
  };
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Tipo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}
export default Grid;
