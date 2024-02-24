import styles from "./OneClient.module.css"

const OneClient = ({ client }) => {
  console.log("Client: " + client)

  const { name, rank, servis} = client;
  console.log(name, rank, servis)

  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        <p>{name} </p>
      </div>
      <div className={styles.descWrapper}>
        
        <p>{rank}</p>
        <p>{servis}</p>
      </div>
    </div>
  )  
}

export default OneClient;