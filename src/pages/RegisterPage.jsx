import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import './Styles/RegisterPage.css'

const RegisterPage = () => {

  const {register , handleSubmit, reset} = useForm()

  const {registerUser } = useAuth()

  const submit = (data) => {
    registerUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'unknown'
    })
  }

  return (
    <div className="form-container">
      <form className="form"  onSubmit={handleSubmit(submit)}>
        <h2 className="form__title">Register</h2>
        <label className="form__label">
          <span  className="form__field">First Name</span >
          <input className="form__input"  {...register('firstName')} type="text" />
        </label>
        <label>
          <span className="form__field">Last Name</span >
          <input className="form__input" {...register('lastName')}  type="text" />
        </label>
        <label>
          <span className="form__field">Email</span >
          <input className="form__input" {...register('email')}  type="email" />
        </label>
        <label>
          <span className="form__field">Password</span >
          <input className="form__input" {...register('password')}  type="password" />
        </label>
        <label>
          <span className="form__field">Gender</span >
          <select className="form__input"  {...register('gender')} >
            <option value='unknown'>Unknown</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>I prefer don't say it</option>
          </select>
        </label>
        <button className="card-btn">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
