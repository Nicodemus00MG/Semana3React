import { useState,useEffect } from 'react'

import './styles.css'
import axios from 'axios'
import CardUseres from './components/CardUseres.jsx'
function App() {
 
   const [users, setUsers] = useState()
  const url='https://randomuser.me/api/?results=20'
  useEffect(() => {
   

  axios.get(url)
    .then(res=>setUsers(res.data.results))
    .catch(e=>console.log(e))
   
  }, [])

  console.log(users)
  

  return (
    <div className="App">
       <h1>Clase 3.1</h1>
      {
        users?.map(user=>(
          <CardUseres key={user.login.uuid} users={user}/>
        ))
      }
    </div>
  )
}

export default App
