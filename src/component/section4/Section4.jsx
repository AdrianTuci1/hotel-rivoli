import React from 'react'
import './section4.scss'
import ImageSlider from '../slider/ImageSlider'
import { RoomDesc, RoomDesc2, RoomDesc3 } from '../roomdesc/RoomDesc'
import Reveallx from '../roomreveal/RoomReveal'
import { useTranslation } from 'react-i18next';
import i18n from '../../translation';

function Section4() {
  const { t } = useTranslation();

  const imageURL= ['./dubla.jpg', './baie2.jpg', './balcon.JPG']
  const imageURL2 = ['./dormitor.jpg', './baie.JPG', './terasa.JPG']
  const imageURL3 = [ './apt0.jpg', './scari.jpg', './apt2.jpg', './baie.JPG']
  const desc = ['BEDROOM', 'BATHROOM', 'BALCONY']
  const desc2 = ['BEDROOM', 'BATHROOM', 'TERRACE']
  const desc3 = ['FIRST FLOOR', 'STAIRS', 'BEDROOM', 'BATHROOM']

  return (
    <div className='section-4'>
      <div className="first-option optionm">
      <h2><Reveallx sentence={t('camdubla')} /></h2>
      <h4>{t('dubladesc')}</h4>
      <RoomDesc2 />
      <ImageSlider images={imageURL} descriptions={desc}/>
      </div>
      <div className="second-option optionm">
      <h2><Reveallx sentence={t('deluxe')}/></h2>
      <h2><Reveallx sentence={t('room')}/></h2>
      <h4>
        {t('deluxedesc')}
      </h4>
      <RoomDesc />
      <ImageSlider images={imageURL2} descriptions={desc2}/>
      </div>
      <div className="third-option optionm">
      <h2><Reveallx sentence={t('apartament')} /></h2>
      <h4>
        {t('apartamentdesc')}
        </h4>
      <RoomDesc3 />
      <ImageSlider images={imageURL3} descriptions={desc3}/>
      </div>
    </div>
  )
}

export default Section4;