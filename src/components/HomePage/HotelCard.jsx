import { useNavigate } from 'react-router-dom'
import './styles/HotelCard.css'

const HotelCard = ({hotel}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/hotels/${hotel.id}`)
    }

  return (
        <article className='card'>
            <header className='card__header'>
                <img src={hotel.images[0].url}  alt="" />
            </header>
            <section className='card__section'> 
                <h3 className='card-tittle'>{hotel.name}</h3>
                <p className='card-rating'>Rating: {hotel.rating}</p>
                <span className='card-city'>{hotel.city.name}, {hotel.city.country}</span>
                <div className='card-price'>$ {hotel.price}</div>
            </section>
            <footer className='card-footer'>
                <button className='card-btn' onClick={handleClick}>See more...</button>
            </footer>
        </article>
    
  )
}

export default HotelCard
HotelCard