import './styles/ReserveCard.css'

const ReserveCard = ({reserve, setReserveSelected, deleteBooking, setFormIsClose}) => {

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
    setFormIsClose(false);
  }

  const handleDeleteBooking = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${reserve.id}`
    deleteBooking(url, reserve.id)

  }
  
 
  return (
    <article className='card reserve'>
      <header className='card__header'>
        <img  className='header-img reservation-img' src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section className='card__section'>
        <h3 className='card-tittle reservation-title'>{reserve.hotel.name}</h3>
        <div className='card-city'>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div onClick={handleReview}>Rate and comment this visit...</div>
      </section>
      <section className='card__section reservation-section'>
        <ul>
          <li className='card-city reservation-days'><span>Reservation Days:</span><span className='days-span'> {ReservationDays}</span></li>
          <li className='card-city reservation-days '><span>Subtotal Price:</span><span className='days-span' > {reserve.hotel.price*ReservationDays} USD</span></li>
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
