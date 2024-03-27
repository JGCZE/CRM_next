import Link from 'next/link';
import styles from './Navbar.module.css';
import { handleLogOut } from '@/app/lib/actions';
import { redirect } from 'next/navigation';

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
        <form action={handleLogOut}>
          <button className={styles.logoutBtn} >LOGOUT</button>
        </form>
      </div>
    </div>
  )
}

export default Navbar
