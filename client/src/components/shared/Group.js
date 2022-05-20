import React from 'react';


const Group = (props) => {
const {name, location, image} = props; 

  return(
    <div>
      <h1>Group</h1>
      <p>name: {name}</p>
      <p>location: {location}</p>
      <p>image: {image}</p>
      
    </div>
  )
}

export default Group; 