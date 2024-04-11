import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
// import { getHotelsThunk } from '../../store/states/hotels.slice';
import { useDispatch} from 'react-redux'
import { getHotelesThunk } from '../../store/states/hotels.slice';
import './styles/CategoryFilter.css'


const CategoryFilter = () => {

    const url = 'https://hotels-api.academlo.tech/cities';
    const [cities, getCities] = useFetch(url)

    useEffect(() => {
        getCities()
    }, [])

    const dispatch = useDispatch()

    const handleFilterCity = (id) => {
        let url 

        if (id ){
            url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`
        }else {
            url = `https://hotels-api.academlo.tech/hotels`
        }
        dispatch(getHotelesThunk(url))

        
    };

  return (
   <section className='filter-cities'>
    <h3 className='cities-title'>Cities</h3>
    <ul className='cities-ul'>
        <li className='cities-lis' onClick={() => handleFilterCity(cities?.id)}>All cities</li>
        {
            cities?.map(city => (
                <li className='cities-lis' onClick={() => handleFilterCity(city.id)} key={city.id}>
                    {city.name}
                </li>
            ))
        }
    </ul>
   </section>
  )
}

export default CategoryFilter
