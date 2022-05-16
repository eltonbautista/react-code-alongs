import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import About from "./components/About";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;