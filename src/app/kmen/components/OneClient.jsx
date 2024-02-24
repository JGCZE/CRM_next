import styles from "./OneClient.module.css"

const OneClient = ({ client }) => {
  console.log(client)
  const { firstName, lastName, rank, servis, zp, majetek, hypo, invj, invm } = client;
  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        <p>{firstName} {lastName}</p>
      </div>
      <div className={styles.descWrapper}>
        <p>{rank}</p>
        <p>{servis}</p>
        <p>{zp}</p>
        <p>{majetek}</p>
        <p>{hypo}</p>
        <p>{invj}</p>
        <p>{invm}</p>
      </div>
    </div>
  )  
}

export default OneClient;