import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Technology } from "../components/Pages/Technology/Technology";
import { Error } from "../components/Error404";
import { Destination } from "../components/Pages/Destination/Destination";
import { Home } from "../components/Pages/Home";
import { Crew } from "../components/Pages/Crew/Crew";
import logo from "../assets/shared/logo.svg"
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { useState } from "react";
export const AppRouter = () => {

    let location = useLocation().pathname.split("/").join("")
    const [checkValue, setCheckValue] = useState(false)
  return (
    <>
    
      {/*Navigation Menu */}
      <header className="header">
      <div className="logo">
      <img src={logo}/>
      </div>
      <div className="header__line"></div>
        <nav className={"navbar " + ((checkValue) ? "active" : "")}>
          <ul className="navlist"  onClick={() => setCheckValue(false)}>

            <li className="navlink">
              <NavLink to="/home" >
              <span className="nav-number">00 &nbsp; </span>
              Home</NavLink>
            </li>

            <li className="navlink">
              <NavLink to="/destination">
              <span className="nav-number">01 &nbsp; </span>
              Destination</NavLink>
            </li>

            <li className="navlink">
              <NavLink to="/crew">
              <span className="nav-number">02 &nbsp; </span>
              Crew</NavLink>
            </li>

            <li className="navlink">
              <NavLink to="/technology">
              <span className="nav-number">03 &nbsp; </span>
              Technology</NavLink>
            </li>
          </ul>
        </nav>
        <HamburgerMenu setCheckValue={setCheckValue} checkValue={checkValue}/>
        
      </header>

      <div className={`filter ${
            checkValue ? "active" : ""
        }`} onClick={() => setCheckValue(false)}></div>
      {/*Config routes */}
      <main className={"main " + location}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<Error />} />
      </Routes>      
      </main>
     
      </>
  );
};
