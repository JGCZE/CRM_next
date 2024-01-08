import Searchbar from "@/components/SearchBar/Searchbar.js"
import DescBar from "@/components/DescBar/page.jsx"
import OneClient from "./components/OneClient.jsx"
import Link from "next/link.js"
import data from "../../data/data.js"
import styles from "./Kmen.module.css"

const Kmen = () => {
  console.log(data)
  return (
    <div className={styles.container}>
      Kmen
      <Searchbar />
      <DescBar />
      {data.map((client) => {
        return (
          <Link key={client.id} href="/" className={styles.links}>
            <OneClient client={client} className={styles.client} />
          </Link>
        )
      })}
    </div>
  )
}

export default Kmen;