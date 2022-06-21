import styles from "./Resumo.module.css";
import ResumoItem from "./ResumoItem";
import { FaDollarSign } from "react-icons/fa";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

function Resumo({ income, expense, total }) {
  return (
    <div className={styles.container}>
      <div>
        <ResumoItem title="Entradas" Icon={AiOutlineArrowUp} value={income} />
      </div>
      <div>
        <ResumoItem title="Saídas" Icon={AiOutlineArrowDown} value={expense} />
      </div>
      <div>
        <ResumoItem title="Total" Icon={FaDollarSign} value={total} />
      </div>
    </div>
  );
}
export default Resumo;
