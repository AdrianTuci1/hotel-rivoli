import React from 'react'
import './roomdesc.scss'
import i18n from '../../translation';
import { useTranslation } from 'react-i18next';


export const RoomDesc =() => {
    const { t } = useTranslation();
  return (
    <div className='roomdesc'>
        <div className="rd-1">
            <div className="bedroom">
                <span className="ti">{t('dormitor')}</span>
                <ul className='dsc'>
                    <li>{t('pat matrimonial')}</li>
                    <li>{t('birou')}</li>
                    <li>{t('terasa')}</li>
                    <li>SMART TV</li>
                    <li>{t('canapea extensibila')}</li>
                </ul>
            </div>
            <div className="bathroom">
                <span className="ti">{t('baie')}</span>
                <ul className='dsc'>
                    <li>{t('dus')}</li>
                    <li>{t('uscator')}</li>
                </ul>
            </div>
        </div>
        <div className="rd-2">
            <div className="amenities">
                <span className="ti">AMENITIES</span>
                <ul>
                    <li>{t('birou')}</li>
                    <li>{t('uscator')}</li>
                    <li>{t('internet')}</li>
                    <li>{t('aer conditionat')}</li>
                </ul>
            </div>
        </div>
        <div className="rd-3">
            <span className="desc">32M² - {t('marime1')}</span>
        </div>
    </div>
  )
};

export const RoomDesc2 = () => {
    const { t } = useTranslation();
    return (
      <div className='roomdesc'>
          <div className="rd-1">
              <div className="bedroom">
                  <span className="ti">{t('dormitor')}</span>
                  <ul className='dsc'>
                      <li>{t('pat matrimonial')}</li>
                      <li>{t('birou')}</li>
                      <li>SMART TV</li>
                      <li>{t('balcon')}</li>
                  </ul>
              </div>
              <div className="bathroom">
                  <span className="ti">{t('baie')}</span>
                  <ul className='dsc'>
                      <li>{t('dus')}</li>
                      <li>{t('uscator')}</li>
                  </ul>
              </div>
          </div>
          <div className="rd-2">
              <div className="amenities em">
                  <span className="ti">AMENITIES</span>
                  <ul>
                      <li>{t('birou')}</li>
                      <li>{t('uscator')}</li>
                      <li>{t('internet')}</li>
                      <li>{t('aer conditionat')}</li>
                  </ul>
              </div>
          </div>
          <div className="rd-3">
              <span className="desc">30M² - {t('marime2')}</span>
          </div>
      </div>
    )
  }

  export const RoomDesc3 = () => {
    const { t } = useTranslation();
    return (
      <div className='roomdesc'>
          <div className="rd-1">
              <div className="bedroom">
                  <span className="ti">{t('dormitor')}</span>
                  <ul className='dsc'>
                      <li>{t('pat matrimonial')}</li>
                      <li>{t('birou')}</li>
                      <li>{t('canapea extensibila')}</li>
                      <li>2 SMART TV</li>
                  </ul>
              </div>
              <div className="bathroom">
                  <span className="ti">{t('baie')}</span>
                  <ul className='dsc'>
                      <li>{t('dus')}</li>
                      <li>{t('uscator')}</li>
                  </ul>
              </div>
          </div>
          <div className="rd-2">
              <div className="amenities">
                  <span className="ti">AMENITIES</span>
                  <ul>
                      <li>{t('birou')}</li>
                      <li>{t('uscator')}</li>
                      <li>{t('internet')}</li>
                      <li>{t('aer conditionat')}</li>
                  </ul>
              </div>
          </div>
          <div className="rd-3">
              <span className="desc">42M² - {t('marime3')}</span>
          </div>
      </div>
    )
  }
