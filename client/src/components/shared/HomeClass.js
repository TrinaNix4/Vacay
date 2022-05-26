import React from "react"
import { Link } from "react-router-dom"
import {AuthConsumer} from "../../providers/AuthProvider"
//this is a class so cannot use hooks here
//instead of using hook useContext(AuthContext)
//going to wrap new component below in AuthConsumer 
//can give AuthConsumer a function that has teh value parameter - which is the object
//and return the HomeClass 
class HomeClass extends React.Component {
  render() {
    return(
    <div>
      <h1>Welcome {this.props.user.nickname}!</h1> 
      {/* grab the actual email from authprovider page */}
      <p>Hello, {this.props.user.name}</p>
      <p>{JSON.stringify(this.props)}</p>

      <Link to={`/groups`}>All Groups</Link>
    </div>
  )
}
}

//create new component which is going to wrap the home class component
//use AuthConsumer class to wrap it; and give it a function that has
//the data (value) .
//pass down props and pass down value (data)
//in app.js, passed props here to HomeClass(yoyo)
//and also, take value object from my provider and pass all that data down
const ConnectedHomeClass = (props) => {
  return (
    <AuthConsumer>
      { value=> <HomeClass {...props} {...value}/>}
    </AuthConsumer>
  )
}
export default ConnectedHomeClass