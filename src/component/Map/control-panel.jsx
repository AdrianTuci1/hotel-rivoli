import * as React from 'react';
import './controlpan.scss'

function ControlPanel() {
  return (
    <div className="control-panel">
      <div className="arri aaa">
        <span className='tit'>SOSIRE</span><br />
        <span className="desc">STRADA POSTAVARUL NR.98A BUCURESTI</span>
      </div>
      <div className="prk aaa">
        <span className="tit">PARCARE</span><br />
        <span className="desc">5 LOCURI IN FATA HOTELULUI</span><br />
        <span className="desc">IN APROPIERE, CU PLATA</span>
      </div>
      <div className="transp aaa">
        <span className="tit">TRANSPORT</span><br />
        <span className="desc">TRAMVAI, METROU 1 DECEMBRIE</span>
      </div>
      <div className="linkz aaa">
        <span className="desc mp">GOOGLE MAPS</span>
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);