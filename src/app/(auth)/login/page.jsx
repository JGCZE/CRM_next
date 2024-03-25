import { Button } from "@radix-ui/themes";
import { login } from "../../lib/actions";
import styles from "./LoginPage.module.css";
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <form action={login} className={styles.form}>
          <input type="text" placeholder="user name" name="username"/>
          <input type="password" placeholder="password" name="password"/>
          <Button variant="classic" color="indigo">
             Login
             <ArrowTopRightIcon />
          </Button>
      </form>
    </div>
  )
}

export default LoginPage
