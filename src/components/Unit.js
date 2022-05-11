import React from 'react';
const base_url = 'http://www.ffmages.com/fftactics/images/fft-'

const Unit = ({unit, setParty}) => {
  return(
    <div className="unit-card" onClick={() => { setParty(prevState => [...prevState, unit]) }}>
      <img src={`${base_url}${unit.toLowerCase().replace(' ', '-')}.png`} />
      <h2>{unit}</h2>
    </div>
  )
}

export default Unit;
