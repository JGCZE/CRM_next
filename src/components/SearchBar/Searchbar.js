import Link from 'next/link'
import styles from  './Searchbar.module.css'

const Searchbar = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search.." className={styles.input}/>
      <p>Tady bude filtr</p>
      <Link href="/addClient" className={styles.link}> Přidat klienta</Link>
    </div>
  )
}

export default Searchbar