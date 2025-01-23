import User from "./Users/user"
import UserList from "./userList/UserList"
const App = () => {
  const isUserLoggedIn = false;
  return(
    <>
    {
      isUserLoggedIn ?<User name="gunjan" age={22}/> : <UserList/>
    }
    
    {/* <User name="gunjan" age={22}/>
     <UserList/>  */}
    </>
  )
}

export default App
// conditional rendering 
//{
//   isUserLoggedIn ?<User name="gunjan" age={22}/> : <UserList/>
// }