import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker } from 'pigeon-maps'
import OtherHotels from '../components/HotelsIDPage/OtherHotels'
import FormReserve from '../components/HotelsIDPage/FormReserve'

const HotelsIdPage = () => {

  const {id} = useParams()

  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [ hotel, getHotel ] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [id])

  
  

  return (
    <div>
      <h2>{hotel?.name}</h2>
      <h3>Rating: {hotel?.rating} </h3>
      <div className="slider">
        <img src={hotel?.images[0].url} alt="" />
        {hotel && (
          <Map
            height={200}
            defaultCenter={[+hotel?.lat, +hotel?.lon]}
            maxZoom={16}
            minZoom={10}
          >
            <Marker anchor={[+hotel?.lat, +hotel?.lon]} />
          </Map>
        )}
      </div>
      <section>
        <h3>
          {hotel?.city.name}, {hotel?.city.country}.
        </h3>
        <p>
          <i className="bx bx-map">
          {hotel?.address}
          </i>
        </p>
        <p>{hotel?.description}</p>
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
    </div>
  );
}

export default HotelsIdPage