import React from 'react'
import './section3.scss'
import BoxScroll from '../BoxScroll/BoxScroll'
import Reveall from '../reveall/Reveall'
import { useTranslation } from 'react-i18next';

function Section3() {
  const { t } = useTranslation();
  return (
    <>
    <div className="scroll">
      <BoxScroll />
    </div>
    <div className="texts">
      <Reveall sentence={t('convingete')}/>
    </div>
    </>
  )
}

export default Section3
