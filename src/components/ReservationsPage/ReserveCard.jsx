import './styles/ReserveCard.css'

const ReserveCard = ({reserve, setReserveSelected, deleteBooking}) => {

  const checkIn = new Date(reserve.checkIn) 
  const checkOut = new Date(reserve.checkOut)

  const ReservationDays = (checkOut - checkIn)/(1000 * 60 * 60 * 24)

  const handleReview = () => {
    const obj = {
      ...reserve,
      ReservationDays,
      subtotal: reserve.hotel.price*ReservationDays
    }
    setReserveSelected(obj)
  }

  const handleDeleteBooking = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${reserve.id}`
    deleteBooking(url, reserve.id)

  }
  

  return (
    <article className='card reserve'>
      <header className='card__header'>
        <img src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section className='card__section'>
        <h3 className='card-tittle'>{reserve.hotel.name}</h3>
        <div className='card-city'>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div onClick={handleReview}>Rate and comment this visit...</div>
      </section>
      <section className='card__section'>
        <ul>
          <li className='card-city'><span>Reservation Days</span><span> {ReservationDays}</span></li>
          <li className='card-city'><span>Subtotal Price</span><span > {reserve.hotel.price*ReservationDays} USD</span></li>
        </ul>
      </section>
      <footer className='card-footer'>
        <button className='card-btn' onClick={handleDeleteBooking}>
          <i className='bx bx-trash'></i>
        </button>
      </footer>
    </article>
  )
}

export default ReserveCard
