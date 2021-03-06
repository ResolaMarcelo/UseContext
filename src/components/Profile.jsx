import React,   {useContext} from 'react'
import UserContext from '../context/user/UserContext'

export default function Profile() {

  const { selectedUser} = useContext(UserContext)

  return (
    <>
            {selectedUser ? (<div className='card card-body text-center'> 
              <img className='card-img-top rounded-circle m-auto img-fluid' style={{width: 180}} src={selectedUser.avatar} alt="" />
              <h1> {`${selectedUser.first_name} ${selectedUser.last_name}`} </h1>
              <h3>  {`${selectedUser.email}`} </h3>
            </div>) 
            : (<h1>no se encontro al personaje</h1>) }
    </>
  )
}
