import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"
import './styles/OtherHotels.css'

const OtherHotels = ({hotel}) => {

    const url = `https://booking-app-backend-w5w8.onrender.com/hotels?cityId=${hotel?.cityId}`
    const [hotelsInCity, getHotelsInCity] = useFetch(url)

    useEffect(() => {
        if (hotel) {
            getHotelsInCity()
        }
    }, [hotel])

    

  return (
   <section className="others">
        <h3 className="others-title">Other hotels in <span className="others-span">{hotel?.city.name}</span></h3>
        <div className="other-container">
            {
                hotelsInCity?.filter(hotelInfo => hotelInfo.id !== hotel.id).map(hotelInfo => (
                    <HotelCard
                        key={hotelInfo.id}
                        hotel={hotelInfo}
                    />
                ))
            }
        </div>
   </section>
  )
}

export default OtherHotels
