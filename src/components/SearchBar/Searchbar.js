import Link from 'next/link'
import styles from  './Searchbar.module.css'

const Searchbar = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search.." />
      <p>F</p>
      <Link href="/add"> Přidat klienta</Link>
    </div>
  )
}

export default Searchbar