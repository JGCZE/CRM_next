import Searchbar from "@/components/SearchBar/Searchbar.js"
import DescBar from "@/components/DescBar/page.jsx"
import OneClient from "./components/OneClient.jsx"
import Link from "next/link.js"
import styles from "./Kmen.module.css"
import { getClient } from "../lib/data.js"

const Kmen = async () => {
  const clients = await getClient()

  return (
    <div className={styles.container}>
      Kmen
      <Searchbar />
      <DescBar />
      {clients.map((client) => {
        return (
          <Link key={client.id} href={`/kmen/${client._id}`} className={styles.links}>
            <OneClient client={client} className={styles.client} />
          </Link>
        )
      })}
    </div>
  )
}

export default Kmen;