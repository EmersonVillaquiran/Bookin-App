import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";
import './styles/FormReserve.css'

const FormReserve = ({hotelId}) => {

 const {handleSubmit, register, reset} = useForm()

 const [,,createBooking] = useCrud()

 const submit = (data) => {
  const url = 'https://hotels-api.academlo.tech/bookings'
  data.hotelId = +hotelId
  createBooking(url, data)
 }

  return (
    <section className="reservations">
      <h3 className="reservations-title">Reservations</h3>
      <form className="reservations-form" onSubmit={handleSubmit(submit)}>
        <label className="filter-label reservations-label">
          <span className="filter-span reservations-span">Check-in</span>
          <input className="filter-input reservations-input" {...register('checkIn')} type="date"/>
        </label>
        <label className="filter-label reservations-label">
          <span className="filter-span reservations-span">Check-out</span>
          <input className="filter-input reservations-input " {...register('checkOut')} type="date"/>
        </label>
        <button className='card-btn reservation-btn'>Submit</button>
      </form>
    </section>
  );
};

export default FormReserve;
