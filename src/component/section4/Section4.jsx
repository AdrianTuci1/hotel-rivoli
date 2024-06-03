import React from 'react'
import './section4.scss'
import ImageSlider from '../slider/ImageSlider'
import { RoomDesc, RoomDesc2, RoomDesc3 } from '../roomdesc/RoomDesc'
import Reveallx from '../roomreveal/RoomReveal'

function Section4() {
  const sent1 = "CAMERA DUBLA"
  const imageURL= ['./dubla.jpg', './baie2.jpg', './balcon.JPG']
  const imageURL2 = ['./dormitor.jpg', './baie.JPG', './terasa.JPG']
  const imageURL3 = [ './apt0.jpg', './scari.jpg', './apt2.jpg', './baie.JPG']
  const desc = ['DORMITOR', 'BAIE', 'BALCON']
  const desc2 = ['DORMITOR', 'BAIE', 'TERASA']
  const desc3 = ['PARTER', 'SCARI', 'DORMITOR', 'BAIE']
  return (
    <div className='section-4'>
      <div className="first-option optionm">
      <h2><Reveallx sentence={sent1} /></h2>
      <h4>CAMERA PENTRU 2 PERSOANE, SPATIOASA, AMENAJATA MODERN CU BALCON</h4>
      <RoomDesc2 />
      <ImageSlider images={imageURL} descriptions={desc}/>
      </div>
      <div className="second-option optionm">
      <h2><Reveallx sentence="CAMERA DUBLA"/></h2>
      <h2><Reveallx sentence="DELUXE"/></h2>
      <h4>CAMERA PENTRU 3 PERSOANE, SPATIOASA, AMENAJATA MODERN CU CANAPEA EXTENSIBILA SI TERASA. 
        POTRIVITA PENTRU O FAMILIE CU 1 SAU 2 COPII.
        </h4>
      <RoomDesc />
      <ImageSlider images={imageURL2} descriptions={desc2}/>
      </div>
      <div className="third-option optionm">
      <h2><Reveallx sentence="APARTAMENT" /></h2>
      <h4>APARTAMENT PENTRU 4 PERSOANE CU UN ETAJ, LA PARTER ESTE O CANAPEA EXTENSIBILA
        IAR SUS UN PAT MATRIMONIAL SI BAIA.
        </h4>
      <RoomDesc3 />
      <ImageSlider images={imageURL3} descriptions={desc3}/>
      </div>
    </div>
  )
}

export default Section4;