import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
//used in app.js where it wraps all of the routes 
//before rendering the routes, asks do you or do you not have a user?
//and if you have a token, but do not have a user, go check if token is valid
//if it is valid, lets set the user.  this makes the refresh work, doesn't log us out when we refresh 
const FetchUser = (props) => {
  //state that is a boolean; 
  const [loaded, setLoaded] = useState(false);
  //pulling user and setUser (setter and getter) from our provider
  const { user, setUser } = useContext(AuthContext);

  // [] makes this act as componentDidMount
  useEffect(() => {
    //gonna runthis function when this component mounts 
    checkUser();
  }, []);

  //checkuser checks to see do i have a user? yes or no? 
  const checkUser = async () => {
    // if user is authenticated or doesn't not have access token
    // we can setloaded to true and return from the function call
    //1st -- do you have a user? and also check if you do not have an access token
    //if you do have a user OR you don't have a user (don't have the token)
    if (user || !localStorage.getItem("access-token")) {
      console.log('user found or no token')
      //once loaded is true..then we can render the route (on line 46)
      setLoaded(true);
      return;
    }
    //3rd case
    // user is not authenticated but has access-token in local storage
    // let's check if it is valid if it, will grab and set user
    try {
      //token sent (need this to validate)
      const res = await axios.get("/api/auth/validate_token");
      //token was valid, res.data.data is the 'user' data so 
      //lets set the user to that 
      setUser(res.data.data);
    } catch (err) {
      //token was not valid; 
      console.log(err);
      console.log("unable to validate token");
    } finally {
      //Block of code to be executed regardless of the try / catch result
      setLoaded(true);
    }
  };

  // return nested jsx in app.js. if loaded ie user has been checked to see
  // if they are auth or not, while in the process of checking don't
  // return nested instead just return null, this way nothing in the fetchuser
  // in app.js wont be loaded
  return loaded ? props.children : null;
};

export default FetchUser;