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
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h2 className="form__title">User</h2>
        <label className="form__label">
          <span className="form__field">Email</span>
          <input className="form__input"{...register('email')} type="email" />
        </label>
        <label className="form__label">
          <span className="form__field">Password</span>
          <input className="form__input" {...register('password')} type="password" />
        </label>
        <button className="card-btn"> Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
