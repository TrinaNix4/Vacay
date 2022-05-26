import axios from 'axios';
import {useState} from 'react';

const Home = () => {
  const [groups, setGroups] = useState([])
  const [error, setError] = useState(null);


  const getGroups = async () => {
    try{
      let res = await axios.get("/api/groups");
      setGroups(res.data);
    } catch(err) {
      setError(err); 
    }
  }




  const newGroup = async (id) => {
    let res = await axios.put('/api/groups/${id}');
  }
}