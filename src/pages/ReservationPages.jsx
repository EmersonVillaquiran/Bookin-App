import React, { useEffect, useState } from 'react'
import useCrud from '../hooks/useCrud'
import ReserveCard from '../components/ReservationsPage/ReserveCard'
import FormReviews from '../components/ReservationsPage/FormReviews'

const ReservationPages = () => {

  const [reserveSelected, setReserveSelected] = useState()
  const [ bookings, getBookings,,deleteBooking ] = useCrud()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    getBookings(url)
  }, [])


  return (
    <section>
      <FormReviews
        reserveSelected={reserveSelected}
        setReserveSelected={setReserveSelected}
      />
      <h2>Reservations</h2>
      {
        bookings?.map(reserve => (
            <ReserveCard
                key={reserve.id}
                reserve={reserve}
                setReserveSelected={setReserveSelected}
                deleteBooking={deleteBooking}
            />
        ) )
      }
    </section>
  )
}

export default ReservationPages
