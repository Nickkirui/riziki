import React, {useState, useEffect} from 'react'
import { auth, database } from '../../global/firebaseCofig'
import {useSelector} from 'react-redux'

function LoanBalance() {

  const [ applications, setApplications ] = useState([])


  const user = useSelector((state) => state.user.user)

  console.log(user)

  const getApplications = () =>{
    auth.onAuthStateChanged(user =>{
      if(user){
      database.collection('Applications').onSnapshot(snapshot => {
          const newAplications = snapshot.docs.map((doc) => ({
          ID: doc.id,
          ...doc.data(),
          }))
          setApplications(newAplications)
      })
      }
  })
  }

  useEffect(() => {
    getApplications()
  }, [])

  console.log(applications)
  

  return (
    <div>
      {applications.filter(application => application.userId === user).map(filteredApplications => (
      <>
      {filteredApplications.usage}
      <br />
      {filteredApplications.email}
      <br />
      {filteredApplications.dependants}
      <br />
      {filteredApplications.Status}
      <br />
      </>
      ))}</div>
  )
}

export default LoanBalance