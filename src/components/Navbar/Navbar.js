import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href="/">
          <h1>Logo</h1>
        </Link>
        <Link href="/kmen">Klientský kmen</Link>
        <Link href="/discussed">About</Link>
      </div>

      <div>
        <Link href="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar