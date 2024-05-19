import React from 'react'
import './roomdesc.scss'

function RoomDesc() {
  return (
    <div className='roomdesc'>
        <div className="rd-1">
            <div className="bedroom">
                <span className="ti">BEDROOM</span>
                <ul className='dsc'>
                    <li>KING SIZE BED</li>
                    <li>DESK</li>
                    <li>SITTING AREA</li>
                    <li>SLEEPING COUCH</li>
                </ul>
            </div>
            <div className="bathroom">
                <span className="ti">BATHROOM</span>
                <ul className='dsc'>
                    <li>SHOWER</li>
                    <li>HAIR DRYER</li>
                </ul>
            </div>
        </div>
        <div className="rd-2">
            <div className="amenities">
                <span className="ti">AMENITIES</span>
                <ul>
                    <li>DESK</li>
                    <li>HAIR DRYER</li>
                    <li>HIGH SPEED WIFI</li>
                    <li>AIR</li>
                </ul>
            </div>
        </div>
        <div className="rd-3">
            <span className="desc">50m2 - 2 SAU 3 PERSOANE - DE LA 300 LEI</span>
        </div>
    </div>
  )
}

export default RoomDesc