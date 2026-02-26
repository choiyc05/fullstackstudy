import '@styles/App.css'
import { Routes, Route } from "react-router";
import Nav from "@assets/Nav.jsx";
import Home from "@pages/Home.jsx";
import Login from "@pages/user/Login.jsx";
import SignUp from "@pages/user/SignUp.jsx";
import UserEdit from "@pages/user/UserEdit.jsx";
import UserView from "@pages/user/UserView.jsx";
import BoardView from "@pages/board/BoardView.jsx";
import BoardAdd from "@pages/board/BoardAdd.jsx";
import BoardEdit from "@pages/board/BoardEdit.jsx";

function App() {

  const path = [
    {path: "/", element: <Home />},
    {path: "/user/login", element: <Login />},
    {path: "/user/signup", element: <SignUp />},
    {path: "/user/useredit", element: <UserEdit />},
    {path: "/user/userview", element: <UserView />},
    {path: "/board/boardview/:id?", element: <BoardView />},
    {path: "/board/boardadd", element: <BoardAdd />},
    {path: "/board/boardedit", element: <BoardEdit />},
  ]


  return (
    <>
      <Nav />
      <Routes>
        {path.map((v,i)=><Route key={i} path={v.path} element={v.element} />)}
      </Routes>
    </>
  )
}

export default App
