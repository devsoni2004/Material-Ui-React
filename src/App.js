import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.";
import AllMerchantsData from "./Pages/AllMerchantsData";
import AcceptUsers from "./Pages/AcceptUsers";
function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/AllMerchantsData" exact element={<AllMerchantsData />}></Route>
          <Route path="/AcceptUsers" exact element={<AcceptUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
