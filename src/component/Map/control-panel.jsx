import './controlpan.scss';
import { useTranslation } from 'react-i18next';

function ControlPanel() {
  const { t } = useTranslation();

  return (
    <div className="control-panelo">
      <div className="info-column left-column">
        <div className="info-section arri">
          <span className="title">{t('sosire')}</span>
          <span className="desc">{t('strada')}</span>
        </div>
        <div className="info-section prk">
          <span className="title">{t('parcare')}</span>
          <span className="desc">{t('parcaredesc1')}</span>
          <span className="desc">{t('parcaredesc2')}</span>
        </div>
      </div>

      <div className="info-column right-column">
        <div className="info-section transp">
          <span className="title">TRANSPORT</span>
          <span className="desc">{t('transport')}</span>
        </div>
        <div className="info-section link">
          <a className="desc link-text" href={import.meta.env.VITE_HOTEL_GOOGLE}>
            GOOGLE MAPS
          </a>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
