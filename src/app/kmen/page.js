import Searchbar from "@/components/SearchBar/Searchbar.js"
import data from "../../data/data.js"
import styles from "./Kmen.module.css"

const Kmen = () => {
  console.log(data)
  return (
    <div>
      Kmen
      <Searchbar />
      {data.map((client) => {
        const { id, name, rank, servis, zp, majetek, hypo, invj, invm } = client;
        return (
        <div key={id} className={styles.container}>
          {/* Componenta klient */}
          <p>{name}</p>
          <p>{rank}</p>
          <p>{servis}</p>
          <p>{zp}</p>
          <p>{majetek}</p>
          <p>{hypo}</p>
          <p>{invj}</p>
          <p>{invm}</p>
        </div>
        )
      })}
    </div>
  )
}

export default Kmen;