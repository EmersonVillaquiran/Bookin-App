import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import UserLogged from "../components/LoginPage/UserLogged";
import { useState } from "react";

const LoginPage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const {register, handleSubmit, reset} = useForm()

  const {loginUser } = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email:'',
      password:''
    })
  }
  if(localStorage.getItem('token')){
    return <UserLogged setUser={setUser} user={user}/>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label>
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
