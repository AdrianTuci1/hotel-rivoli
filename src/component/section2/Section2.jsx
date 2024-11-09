import React from 'react'
import './section2.scss'
import i18n from '../../translation';
import { useTranslation } from 'react-i18next';

function Section2() {
  const { t } = useTranslation();
  return (
    <div className='sec2'>
        <span>RIVOLI</span>
        <p>
          {t('bunvenit')}
        </p>
    </div>
  )
}

export default Section2;