import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const FormReserve = ({hotelId}) => {

 const {handleSubmit, register, reset} = useForm()

 const [,,createBooking] = useCrud()

 const submit = (data) => {
  const url = 'https://hotels-api.academlo.tech/bookings'
  data.hotelId = +hotelId
  createBooking(url, data)
 }

  return (
    <section>
      <h3>Do you want to reserve this hotel?</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Check-in</span>
          <input {...register('checkIn')} type="date"/>
        </label>
        <label>
          <span>Check-out</span>
          <input {...register('checkOut')} type="date"/>
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default FormReserve;
