import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Group = (props) => {
  const navigate = useNavigate()
const {name, id, location, image} = props; 

  return(
    <div>
      <h1>Group</h1>
      <p>name: {name}</p>
      <p>location: {location}</p>
      <p>image: {image}</p>
      <Link to={`/groups/${id}`}>Show</Link>
      
    </div>
  )
}

export default Group; 