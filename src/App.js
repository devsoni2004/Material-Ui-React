import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.";
import AllMerchantsData from "./Pages/AllMerchantsData";
import SucessHistory from "./Pages/SucessHistory";
import Login from "./Auth/Login";
import Forget from "./Auth/Forget";
import Profile from "./Pages/Profile";
import PendingHistory from "./Pages/PendingHistory";
import FailedHistory from "./Pages/FailedHistory";
import Navbar from "./Components/Navbar";
import SideNav from "./Components/Sidenav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SideNav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/AllMerchantsData" exact element={<AllMerchantsData />}></Route>
          <Route path="/SucessHistory" exact element={<SucessHistory />}></Route>
          <Route path="/PendingHistory" exact element={<PendingHistory />}></Route>
          <Route path="/FailedHistory" exact element={<FailedHistory />}></Route>
          <Route path="/Login" exact element={<Login />}></Route>
          <Route path="/Forget" exact element={<Forget />}></Route>
          <Route path="/Profile" exact element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
