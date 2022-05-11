import React from 'react'

const PartyMember = ({job}) => {
  const baseUrl = 'https://www.ffmages.com/fftactics/images/sprites/'
  return(
    <div className="party-member">
      <img src={`${baseUrl}female-${job.toLowerCase().replace(' ', '-')}-job-class2.gif`} />
      <h2>{job}</h2>
    </div>
  )  
}

export default PartyMember;
