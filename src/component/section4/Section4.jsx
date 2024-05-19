import React from 'react'
import './section4.scss'
import ImageSlider from '../slider/ImageSlider'
import RoomDesc from '../roomdesc/RoomDesc'

function Section4() {
  const imageURL= ['./img1.jpeg', './img2.jpeg', './img3.jpeg']
  const imageURL2 = ['./img3.jpeg', './img5.jpeg', './img6.jpeg']
  return (
    <div className='section-4'>
      <div className="first-option optionm">
      <h2>CAMERA DUBLA</h2>
      <h4>CAMERA PENTRU 2 PERSOANE, SPATIOASA, AMENAJATA MODERN CU BALCON</h4>
      <RoomDesc />
      <ImageSlider images={imageURL}/>
      </div>
      <div className="second-option optionm">
      <h2>CAMERA DUBLA DELUXE</h2>
      <h4>CAMERA PENTRU 3 PERSOANE, SPATIOASA, AMENAJATA MODERN CU CANAPEA EXTENSIBILA SI TERASA. 
        POTRIVITA PENTRU O FAMILIE CU 1 SAU 2 COPII.
        </h4>
      <ImageSlider images={imageURL2}/>
      </div>
      <div className="third-option optionm">
      <h2>APARTAMENT</h2>
      <h4>APARTAMENT PENTRU 4 PERSOANE CU UN ETAJ, LA PARTER ESTE O CANAPEA EXTENSIBILA
        IAR SUS UN PAT MATRIMONIAL SI BAIA.
        </h4>
      <ImageSlider images={imageURL2}/>
      </div>
    </div>
  )
}

export default Section4;