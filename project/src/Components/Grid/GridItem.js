import styles from "./GridItem.module.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
function GridItem({ item, onDelete }) {
  return (
    <tr className={styles.td}>
      <td>{item.desc}</td>
      <td>{item.amout}</td>
      <td>
        {item.expense ? (
          <AiOutlineArrowDown color="red" />
        ) : (
          <AiOutlineArrowUp color="green" />
        )}
      </td>
      <td className={styles.trash}>
        <BsFillTrashFill onClick={() => onDelete(item.id)} />
      </td>
    </tr>
  );
}
export default GridItem;
