import React from "react";
import { useForm } from "react-hook-form";
import './styles/PriceFilter.css'

const PriceFilter = ({setFromTo}) => {

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        const from = data.from
        const to = data.to

        setFromTo({
           from: from === '' ? 0 : +from, 
           to: to === '' ? Infinity : Number(to)
        })
    }

  return (
    <section className="filter">
      <h3 className="filter-title">Price</h3>
      <form className="filter-form" onSubmit={handleSubmit(submit)}>
        <label className="filter-label">
          <span className="filter-span">From</span>
          <input className="filter-input" {...register('from')} type="number" />
        </label>
        <label className="filter-label">
          <span>To</span>
          <input className="filter-input" {...register('to')} type="number" />
        </label>
        <button className="container__btn filter-btn">Apply</button>
      </form>
    </section>
  );
};

export default PriceFilter;
