import logo from './logo.svg';
import './App.css'; // css modules
import Weapon from './components/Weapon'
import Unit from './components/Unit'
import PartyMember from './components/PartyMember'
import { useState, useEffect } from 'react';


const base_url_HD = 'http://www.ffmages.com/fftactics/images/fft-'
const base_url = 'http://www.ffmages.com/final-fantasy-tactics/job-classes/'
const UNITS = ['Archer', 'Bard', 'Calculator', 'Chemist', 'Dancer', 'Geomancer', 'Knight', 'Lancer', 'Mediator', 'Mime', 'Monk', 'Oracle', 'Priest', 'Samurai', 'Squire', 'Summoner', 'Thief', 'Time\ Mage', 'Ninja', 'Wizard']


function App() {
  const [weapons, setWeapons] = useState([])
  const [selectedWeapon, setSelectedWeapon] = useState(null)
  const [selectedUnit, setSelectedUnit] = useState(null)
  const [party, setParty] = useState([])
  const [unitModalVisible, setUnitModalVisible] = useState(false)

  const request = async () => {
    try {
      let req = await fetch('http://localhost:9292/weapons')
      let res = await req.json()
      setWeapons(res.weapons)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    request()
  }, [])

  
  return(
    <div className="main-screen">
      <h1>War of the Lions</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis ex minima ipsum praesentium rem repudiandae, odio delectus velit quasi itaque excepturi hic cupiditate, qui nam. Dolores, labore ullam? Sunt.</p>
      <h2>FORMATION</h2>
      <div className="party">
	{
	  party.map((member, i) => {
	    return(
	      <PartyMember job={member} />
	    )
	  })
	}
      </div>
      <hr/>
      <h4>Recruit Units</h4>
      <div className="unit-grid">
        {
          UNITS.map((unit, i) => {
            return(
              <Unit key={i} setUnitModalVisible={setUnitModalVisible} setSelectedUnit={setSelectedUnit} unit={unit} setParty={setParty} />
            )
          })
        }
      </div>
      <hr/>
      {
        selectedWeapon ?
        <div>
          <h2>{selectedWeapon.name}</h2>
          <h4 style={{marginTop: -10}}>TYPE: {selectedWeapon.category}</h4>
          <p>{selectedWeapon.atk} ATK</p>
          <button>PURCHASE: {selectedWeapon.cost} GIL</button>
        </div> : null
      }
      <h4>Select a Weapon</h4>
      <div className="weapons-grid">
        {
          weapons.map((weapon, i) => {
            return(
              <Weapon key={i} weapon={weapon} setSelectedWeapon={setSelectedWeapon} />
            )
          })
        }
      </div>
      <div className={unitModalVisible ? "modal" : "modal hidden"}>
        <div>
          <img className="unit-portrait" src={`${base_url_HD}${selectedUnit?.toLowerCase().replace(' ', '-')}.png`} />
	  <h4 className="unit-name">{selectedUnit}</h4>
	  <div className="unit-form">
	  <h4 className="modal-header">Hire a {selectedUnit}</h4>
	    <div className="paper"></div>
	    <input type="text" placeholder="Enter a name" />
	    <button className="hire-btn">HIRE {selectedUnit?.toUpperCase()}</button>
	    <button className="cancel-btn" onClick={() => { setUnitModalVisible(false) }}>CANCEL</button>
	  </div>
	</div>
      </div>
    </div>
  );
}

export default App;
