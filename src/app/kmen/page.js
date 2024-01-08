import Searchbar from "@/components/SearchBar/Searchbar.js"
import DescBar from "@/components/DescBar/page.jsx"
import OneClient from "./components/OneClient.jsx"
import data from "../../data/data.js"
import styles from "./Kmen.module.css"

const Kmen = () => {
  console.log(data)
  return (
    <div>
      Kmen
      <Searchbar />
      <DescBar />
      {data.map((client) => {
        return (
          <OneClient client={client} key={client.id} className={styles.client} />
        )
      })}
    </div>
  )
}

export default Kmen;