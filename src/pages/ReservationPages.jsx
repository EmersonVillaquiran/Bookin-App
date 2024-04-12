import React, { useEffect, useState } from 'react'
import useCrud from '../hooks/useCrud'
import ReserveCard from '../components/ReservationsPage/ReserveCard'
import FormReviews from '../components/ReservationsPage/FormReviews'
import './Styles/ReservationPages.css'

const ReservationPages = () => {

  const [reserveSelected, setReserveSelected] = useState()
  const [ bookings, getBookings,,deleteBooking ] = useCrud()
  const [formIsClose, setFormIsClose] = useState(true);

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    getBookings(url)
  }, [])

 

  return (
    <section className='container-reservations'>
      <FormReviews
        reserveSelected={reserveSelected}
        setReserveSelected={setReserveSelected}
        formIsClose={formIsClose}
        setFormIsClose={setFormIsClose}
      />
      <h2>Reservations</h2>
      {
        bookings?.map(reserve => (
            <ReserveCard
                key={reserve.id}
                reserve={reserve}
                setReserveSelected={setReserveSelected}
                deleteBooking={deleteBooking}
                setFormIsClose={setFormIsClose}
            />
        ) )
      }
    </section>
  )
}

export default ReservationPages
