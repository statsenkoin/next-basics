import styles from './page.module.css';
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';

export async function generateMetadata({ params: { id } }) {
  return {
    title: `Next App Basics | ${id}`,
  };
}

export default function AuthForm({ params: { id } }) {
  return (
    <div className={styles.wrapper}>
      <h2>AuthForm page</h2>
      {id === 'login' ? <LoginForm /> : <RegisterForm />}
      or
      <h3>Google button component</h3>
    </div>
  );
}
