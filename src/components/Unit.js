import React from 'react';
const base_url = 'http://www.ffmages.com/fftactics/images/fft-'

const Unit = ({unit}) => {
  return(
    <div className="unit-card">
      <img src={`${base_url}${unit.toLowerCase().replace(' ', '-')}.png`} />
      <h2>{unit}</h2>
    </div>
  )
}

export default Unit;