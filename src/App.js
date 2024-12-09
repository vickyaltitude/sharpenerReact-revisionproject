

import React,{useState} from "react";
import AddUser from './Components/Users/AddUser'
import UsersList from "./Components/Users/UsersList";


function App() {
  const [users,setUsers] = useState([])

  function handleNewUser(uName,uAge){
    let id = users.length === 0 ? 1 : users.length+1
    setUsers((lastUsersState)=>[...lastUsersState,{id:id,name: uName,age:uAge}])
  }
  return (
    <div>
  <AddUser onNewUser={handleNewUser} />
  <UsersList users={users} />
    </div>
  );
}

export default App;
 