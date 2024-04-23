import { useEffect, useState } from 'react';
import './styles/SliderImg.css'

const SliderImg = ({hotel}) => {

    const [imgSelected, setImgSelected] = useState(0)

    const objStyle = {
        width: `${hotel?.images.length * 100}%`,
        transform: `translateX(calc(-${imgSelected}/${hotel?.images.length} * 100%))`
    }

    const handlePrev = () => {
        if(imgSelected !== 0){
            setImgSelected(e => e !== 0 && e - 1)
        } else{
            setImgSelected(hotel?.images.length - 1)
        }
    }

    const handleNext = () => {
        if (imgSelected !== hotel?.images.length - 1) {
            setImgSelected(e => e !== hotel?.images.length - 1 && e + 1)
        }else{
            setImgSelected(0)
        }
            
    };


    // useEffect(() => {
    //     setInterval(() => {
    //         handleNext()
    //     }, 2000);
    // }, [imgSelected] )


  return (
    <div className='slider__container'>
        <div className='slider'>
                <button onClick={handlePrev} className='slider__btn'>&lt;</button>
                    <div style={objStyle} className='slider-movable'>
                        {
                            hotel?.images.map((imgInfo) => (
                                <div key={imgInfo.url} className='slider__img-container'>
                                    <img className='slider__img' src={imgInfo.url} alt="" />
                                </div>
                            ))
                        }
            </div>
            <button onClick={handleNext} className='slider__btn slider__next'>&gt;</button>
        </div>
        <div className='slider__footer'>
            {                
             hotel?.images.map((imgInfo, index) => (
                <div key={imgInfo.url} className='slider__footer-container'>
                            <img 
                            onClick={() => setImgSelected(index)}
                            className={`slider__footer-img ${
                                index === imgSelected && 'slider__footer__active'
                        }`} 
                        src={imgInfo.url} alt="" 
                        />
                 </div>
              ))}
        </div>
    </div>
  )
}

export default SliderImg
