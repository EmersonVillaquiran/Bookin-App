import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const FormReviews = ({ reserveSelected, setReserveSelected }) => {
  

  const {handleSubmit, register, reset } = useForm()

  const [,, createReview] = useCrud()

  const submit = data => {
    const url = 'https://hotels-api.academlo.tech/reviews'
    data.hotelId = reserveSelected?.hotel.id
    data.rating = +data.rating 
    createReview(url, data)
    setReserveSelected()

  }
  return (
    <article>
      <h3>Reserve</h3>
      <section>
        <header>
          <img src={reserveSelected?.hotel.images[0].url} alt="" />
        </header>
        <h4>{reserveSelected?.hotel.name}</h4>
        <p>
          {reserveSelected?.hotel.city.name}{" "}
          {reserveSelected?.hotel.city.country}
        </p>
        <ul>
          <li>
            <span>Reservation days </span>
            <span>{reserveSelected?.ReservationDays}</span>
          </li>
          <li>
            Subtotal price <span>{reserveSelected?.subtotal}</span>
          </li>
        </ul>
        <form onSubmit={handleSubmit(submit)} action="">
          <label htmlFor="">
            <span>Rating</span>
            <select {...register('rating')} name="" id="">
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>
          </label>
          <label htmlFor="">
            <span>Comment</span>
            <textarea {...register('comment')}/>
          </label>
          <button>Submit</button>
        </form>
      </section>
    </article>
  );
};

export default FormReviews;
