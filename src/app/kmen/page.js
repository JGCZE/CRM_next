import Searchbar from "@/components/SearchBar/Searchbar.js"
import DescBar from "@/components/DescBar/page.jsx"
import OneClient from "./components/OneClient.jsx"
import Link from "next/link.js"
import data from "../../data/data.js"
import styles from "./Kmen.module.css"
import { getClient } from "../lib/data.js"

const Kmen = async () => {
  //console.log(data)
  const clients = await getClient()
  console.log(clients);

  return (
    <div className={styles.container}>
      Kmen
      <Searchbar />
      <DescBar />
      {clients.map((client) => {
        return (
          <Link key={client.id} href={`/kmen/${client.id}`} className={styles.links}>
            <OneClient client={client} className={styles.client} />
          </Link>
        )
      })}
    </div>
  )
}

export default Kmen;