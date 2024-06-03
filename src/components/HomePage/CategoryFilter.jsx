import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
// import { getHotelsThunk } from '../../store/states/hotels.slice';
import { useDispatch} from 'react-redux'
import { getHotelesThunk } from '../../store/states/hotels.slice';
import './styles/CategoryFilter.css'


const CategoryFilter = () => {

    const url = 'https://booking-app-backend-w5w8.onrender.com/cities';
    const [cities, getCities] = useFetch(url)

    useEffect(() => {
        getCities()
    }, [])

    const dispatch = useDispatch()

    const handleFilterCity = (id) => {
        let url 

        if (id ){
            url = `https://booking-app-backend-w5w8.onrender.com/hotels?cityId=${id}`
        }else {
            url = `https://booking-app-backend-w5w8.onrender.com/hotels`
        }
        dispatch(getHotelesThunk(url))

        
    };

  return (
   <section className='filter-cities'>
    <h3 className='cities-title'>Cities</h3>
    <ul className='cities-ul'>
        <li className='cities-li' onClick={() => handleFilterCity(cities?.id)}>All cities</li>
        {
            cities?.map(city => (
                <li className='cities-name' onClick={() => handleFilterCity(city.id)} key={city.id}>
                    {city.name}
                </li>
            ))
        }
    </ul>
   </section>
  )
}

export default CategoryFilter
