import styles from "./descBar.module.css"

const DescBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        jmeno klienta
      </div>

      <div className={styles.descWrapper}>
        <span>rank</span>
        <span>servis</span>
        <span>žp</span>
        <span>majetek</span>
        <span>hypo</span>
        <span>INV - j</span>
        <span>INV - m</span>
      </div>
    </div>
  )
}

export default DescBar