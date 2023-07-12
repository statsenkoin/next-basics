// import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Welcome() {
  return (
    <main className={styles.main}>
      <h1>Welcome page</h1>
      <Link href="/auth/register" className={styles.authLinks}>
        Register
      </Link>
      <Link href="/auth/login" className={styles.authLinks}>
        Login
      </Link>
    </main>
  );
}
