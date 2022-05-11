import React from 'react'

const PartyMember = ({job}) => {
  const baseUrl = 'https://www.ffmages.com/fftactics/images/sprites/'
  return(
  <div>
    <img src={`${baseUrl}female-${job.toLowerCase()}-job-class2.gif`} />
    <h2>{job}</h2>
  </div>
  )  
}

export default PartyMember;
