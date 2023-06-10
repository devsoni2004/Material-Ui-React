import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.";
import AllMerchantsData from "./Pages/AllMerchantsData";
import AcceptUsers from "./Pages/AcceptUsers";
import Login from "./Auth/Login";
import Forget from "./Auth/Forget";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/AllMerchantsData" exact element={<AllMerchantsData />}></Route>
          <Route path="/AcceptUsers" exact element={<AcceptUsers />}></Route>
          <Route path="/Login" exact element={<Login />}></Route>
          <Route path="/Forget" exact element={<Forget />}></Route>
          <Route path="/Profile" exact element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
