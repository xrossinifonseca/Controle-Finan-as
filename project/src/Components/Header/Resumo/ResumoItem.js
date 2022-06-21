import styles from "./ResumoItem.module.css";

function ResumoItem({ title, Icon, value }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {title} <Icon />
      </p>

      <div className={styles.total}>{value} </div>
    </div>
  );
}

export default ResumoItem;
