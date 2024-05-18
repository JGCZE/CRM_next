import styles from "./OneClient.module.css"
import { isDateOlderThan18Months } from "@/resolvers/dateResolve";
import { IoIosCheckmarkCircle } from "react-icons/io";



const OneClient = ({ client }) => {
  
  const { name, rank, servis, zp } = client;

  const currentDate = new Date().toISOString();
  const isOlder = isDateOlderThan18Months(currentDate, servis);
  const getColor = isOlder ? "red" : "green";
  
  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        <p>{name} </p>
      </div>
      <div className={styles.descWrapper}>
        <p>{rank}</p>
        <p style={{ color: getColor, fontSize: '2rem', }}>
          <IoIosCheckmarkCircle/>
        </p>
        <p>{servis}</p>
        <p>{zp}</p>
        <p>Brno Šumperk</p>
      </div>
    </div>
  )  
}

export default OneClient;