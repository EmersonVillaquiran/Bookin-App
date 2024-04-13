import { useSelector } from "react-redux"
import HotelCard from "../components/HomePage/HotelCard"
import { useRef, useState } from "react"
import './Styles/HomePage.css'
import CategoryFilter from "../components/HomePage/CategoryFilter"
import PriceFilter from "../components/HomePage/PriceFilter"
import './Styles/HomePage.css'

const HomePage = () => {

   const [inputName, setInputName] = useState('');
   const [fromTo, setFromTo] = useState({
      from: 0,
      to: Infinity
   })   

  const hotels = useSelector(states => states.hotels)

  const inputValue = useRef()

  const handleChange = () => {
    setInputName(inputValue.current.value)
  }

  const cbFilter = hotelInfo =>{
    //Filter by name

    const filterName = hotelInfo.name.toLowerCase().includes(inputName.toLowerCase().trim());

    //Filter by price
    const price = Number(hotelInfo.price)
    const filterPrice = price > fromTo.from && price <= fromTo.to

    return filterName && filterPrice
  }

  return (
    <div className="container">
      <aside className="home-aside">
        <h3 className="home-aside-filters">Filters</h3>
        <PriceFilter
          setFromTo={setFromTo}
        />
        <CategoryFilter/>
      </aside>
      <div className="container-wrapper">
          <div className="container__form">
            <input placeholder="Search your hotel..." className="container__input" onChange={handleChange} ref={inputValue} value={inputName} type="text" />
            <button className="container__btn">
              Search
            </button>
          </div>
          <div className="container-card">
          {
            hotels?.filter(cbFilter).map((hotelInfo) => (
              <HotelCard
                key={hotelInfo.id}
                hotel={hotelInfo}
              />
            ))
          }
          </div>
        </div>
      </div>
  )
}

export default HomePage
