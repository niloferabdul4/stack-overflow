
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/questions.js';
import { setCurrentUser } from './actions/currentUser.js';
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(fetchAllQuestions())},[dispatch])
  
 useEffect(() => {
  dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))       

}, [dispatch]);
  return (
   
    <div className="App">    
         <Navbar />
        <AllRoutes/>    
    </div>
  );
}

export default App;
