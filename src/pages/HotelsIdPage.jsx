import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker } from 'pigeon-maps'
import OtherHotels from '../components/HotelsIDPage/OtherHotels'
import FormReserve from '../components/HotelsIDPage/FormReserve'
import './Styles/HotelsIdPage.css'
import SliderImg from '../components/HotelsIDPage/SliderImg'
import HotelReview from '../components/HotelsIDPage/HotelReview'

const HotelsIdPage = () => {

  const {id} = useParams()

  const url = `https://booking-app-backend-w5w8.onrender.com/hotels/${id}`
  const [ hotel, getHotel ] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [id])

  // //Reviews
  
  
  //   const url2 = 'https://booking-app-backend-w5w8.onrender.com/reviews';
  //   const [reviews = [],  fetchData] = useFetch(url2);
  
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  //   console.log(reviews);
  

  return (
    <div className='container__hotel'>
        <h2 className='hotel-name'>{hotel?.name}</h2>
        <h3 className='hotel-rating'>Rating: {hotel?.rating} 
        </h3>
        <div className='hotel-img' >
        <SliderImg
          hotel={hotel}
        />
        </div>
      <div className="hotel-slider">
        {hotel && (
          <Map
            height={235}
            width={350}
            defaultCenter={[+hotel?.lat, +hotel?.lon]}
            maxZoom={16}
            minZoom={10}
          >
            <Marker anchor={[+hotel?.lat, +hotel?.lon]} />
          </Map>
        )}
      </div>
      <section className='hotel-info'>
        <h3 className='info-city'>
          {hotel?.city.name}, {hotel?.city.country}.
        </h3>
        <p className='info-address'>
          <i className="bx bx-map">
          {hotel?.address}
          </i>
        </p>
        <p className='info-description'>{hotel?.description}</p>
      </section>
      {
        localStorage.getItem('token')
        ?<FormReserve
        hotelId={hotel?.id}/>
        : <h4>If you want to make a reservation, please <Link to='/login'>login.</Link> </h4>
      }      
      <OtherHotels
        hotel={hotel}
      />
      {/* <div>
        <h1>Reviews</h1>
        {
          reviews.map(review => (
            <HotelReview
              key={review.id}
              review={review}
            />
          ))
        }
      </div> */}
    </div>
  );
}

export default HotelsIdPage
