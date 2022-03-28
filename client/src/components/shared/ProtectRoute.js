import { Navigate, Outlet} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

//do i have auth.user? do i have that user state?
//only have the user state if they logged in
//if they do have user state, return an outlet component 
//if not, redirect to login page 
const ProtectedRoute = (props) => {
  const auth = useContext(AuthContext)
  return auth.user ? <Outlet /> : <Navigate to='/login' />
}


export default ProtectedRoute; 