import React from 'react';
const base_url = 'http://www.ffmages.com/fftactics/images/fft-'

const Unit = ({unit, setParty, setSelectedUnit, setUnitModalVisible}) => {
  return(
    <div className="unit-card" onClick={() => { setSelectedUnit(unit); setUnitModalVisible(true) }}>
      <img src={`${base_url}${unit.toLowerCase().replace(' ', '-')}.png`} />
      <h2>{unit}</h2>
    </div>
  )
}

export default Unit;
