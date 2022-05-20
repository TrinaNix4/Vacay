import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Group from './Group'

const Groups = () => {
  const [groups, setGroups] = useState([]);
  useEffect(()=>{
    getGroups()
  },[])

  const getGroups = async() => {
    let res = await axios.get('api/groups')
    setGroups(res.data)
  }
  const renderGroups = () => {
    return groups.map(group => {
        return <Group key={group.id} {...group}/>
    })
  }


return (
  <div>
    <h1>Groups</h1>
    <div>
      {renderGroups()}
    </div>
    <p>{JSON.stringify(groups)}</p>
  </div>
)
}

export default Groups;