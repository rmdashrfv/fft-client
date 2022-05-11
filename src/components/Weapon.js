import React from 'react'
import '../App.css';

const Weapon = ({weapon, setSelectedWeapon}) => {
  const imgSrc = `https://www.ffmages.com/fftactics/images/icons/${weapon.name.toLowerCase().replace(' ', '-')}.gif`
  return(
    <div className="weapon" onClick={() => {
      //document.body.scrollTop = document.documentElement.scrollTop = 0;
      setSelectedWeapon(weapon)
    }}>
      <p className="weapon-name">{weapon.name}</p>
      <img src={imgSrc} className="weapon-img" />
      <p className="weapon-cost">🪙 {weapon.cost} GIL</p>
    </div>
  )
}

export default Weapon;
