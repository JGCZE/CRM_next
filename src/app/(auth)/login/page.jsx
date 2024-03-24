import { login } from "../../lib/actions";

const LoginPage = async () => {
  return (
    <div>
      <form action={login}>
          <input type="text" placeholder="user name" name="username"/>
          <input type="password" placeholder="password" name="password"/>
          <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage