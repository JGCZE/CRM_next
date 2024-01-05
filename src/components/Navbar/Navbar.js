import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          <h1>Logo</h1>
        </Link>
        <Link href="/kmen" className={styles.link}>Klientský kmen</Link>
        <Link href="/discussed" className={styles.link}>About</Link>
      </div>

      <div>
        <Link href="/login" className={styles.link}>Login</Link>
      </div>
    </div>
  )
}

export default Navbar