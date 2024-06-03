import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";
import './styles/FormReviews.css'

const FormReviews = ({ reserveSelected, setReserveSelected, formIsClose, setFormIsClose }) => {
  

  const {handleSubmit, register, reset } = useForm()

  const [,, createReview] = useCrud()

  const submit = data => {
    const url = 'https://booking-app-backend-w5w8.onrender.com/reviews'
    data.hotelId = reserveSelected?.hotel.id
    data.rating = +data.rating 
    createReview(url, data)
    setReserveSelected()

  }

 const handleFormClose = () =>{
    setFormIsClose(true)
  }

  return (
    <article className={`container-review ${formIsClose && 'form__close'}`}>
      <section className="review">
      <h3 className="review-tittle">Reserve</h3>
      <div onClick={handleFormClose} className="form__exit">X</div>
        <header className="review-form">
          <img className="form-img" src={reserveSelected?.hotel.images[0].url} alt="" />
        </header>
        <h4 className="review-name">{reserveSelected?.hotel.name}</h4>
        <p className="review-city">
          {reserveSelected?.hotel.city.name}, {reserveSelected?.hotel.city.country}
        </p>
        <ul className="review-ul">
          <li>
            <span className="review-span">Reservation days </span>
            <span className="span-days">{reserveSelected?.ReservationDays}</span>
          </li>
          <li>
            <span className="review-span">Subtotal price</span> <span className="span-days">$ {reserveSelected?.subtotal}</span>
          </li>
        </ul>
        <form className="review-form" onSubmit={handleSubmit(submit)} action="">
          <label className="review-label" htmlFor="">
            <span className="review-span">Rating</span>
            <select className="review-rating" {...register('rating')} name="" id="">
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>
          </label>
          <label className="review-label" htmlFor="">
            <span className="review-span">Comment</span>
            <textarea className="comment-text" {...register('comment')}/>
          </label>
          <button className="container__btn">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default FormReviews;
