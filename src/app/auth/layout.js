import styles from './page.module.css';

export default function AuthLayout({ children }) {
  return (
    <main className={styles.main}>
      <h1>Auth page</h1>
      {children}
    </main>
  );
}
