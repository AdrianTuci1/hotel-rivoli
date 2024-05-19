import React from 'react'
import './section7.scss'
import NavCard from '../navCard/NavCard'


function Section7() {

    const images = [
        { src: './metrou.JPG', description: 'METROU 1 DECEMBRIE 1918 - 700M' },
        { src: './parklake.png', description: 'CENTRUL COMERCIAL PARK LAKE - 3000M' },
        { src: './parcultitan.jpg', description: "PARCUL TITAN - 2000M"}
      ];

  return (
    <div className="sec7">
    <div className='continut7'>
        <div className="bxz1"></div>
        <span className="continut3">
            In apropiere sunt 2 centre comerciale si metroul la 5 minute distanta. 
            Poti ajunge rapid in orice parte a orasului.
            In apropiere este Parcul Titan si centrul comercial ParkLake.
            Hotelul nostru este alegerea ideala si daca veniti
            in cadrul unui eveniment.
        </span>
    </div>
    <div className="image-card-container">
    {images.map((image) => (
        <NavCard 
        key={image.src} 
        imageSrc={image.src} 
        description={image.description}
        />
    ))}
    </div>
    </div>
  )
}

export default Section7