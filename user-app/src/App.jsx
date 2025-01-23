import "./app.css";
import Counter from "./components/counter/Counter";
import Form from "./components/form/Form";
import UserForm from "./components/userform/UserForm";
import Login from "./components/login/Login";
import UserList from "./components/userlist/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import usersInfo from "./components/data/usersInfo.json";
import NavBar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import UserPage from "./components/userpage/UserPage";
import SpinnerComp from "./components/common/spinner/SpinnerComp";
const App = () => {
  // const isLoggedin = localStorage.getItem("isLoggedIn");
  // const isLoggedIn = JSON.parse(isLoggedin);
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userRes = await fetch("https://dummyjson.com/users");
        const userData = await userRes.json();
        console.log("data", userData.users);
        setUsers(userData.users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // useEffect(async () => {
  //   const userRes = await fetch("https://dummyjson.com/users");
  //   const userData = await userRes.json();
  //   console.log("data", userData.users);
  //   setUsers(userData.users);
  //   setIsLoding(false);
  // }, []);
  function onFormSubmit(newUser) {
    const updateUser = [newUser, ...users];
    setUsers(updateUser);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoading ? (
                <SpinnerComp />
              ) : (
                <UserList users={users} setUsers={setUsers} />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
          <Route
            path="/userform"
            element={<UserForm onFormSubmit={onFormSubmit} />}
          />
          <Route path="/users/:userId" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  // return <>{isLoggedIn ? <UserList /> : <Login />}</>;
  // return (
  //   <>
  //     <Counter />
  //     <Form />
  //   </>
  // );
};

export default App;
