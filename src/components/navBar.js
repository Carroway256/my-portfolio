import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./navBar.scss"
const NavBar = () => {
  const [tab, setTab] = useState("about")
  return (
    <div>
      <NavBarItem
        name={"about"}
        onClick={() => setTab("about")}
        isSelected={tab === "about"}
      />
      <NavBarItem
        name={"experience"}
        onClick={() => setTab("experience")}
        isSelected={tab === "experience"}
      />
      <NavBarItem
        name={"portfolio"}
        onClick={() => setTab("portfolio")}
        isSelected={tab === "portfolio"}
      />
    </div>
  )
}
const NavBarItem = ({ name, onClick, isSelected }) => {
  console.log(isSelected)
  return (
    <div
      className={`flex        listElement ${
        isSelected ? "listElement-selected" : ""
      } opacity-50`}

      
      onClick={onClick}
    >
      <div
        className={`elementsBorder border-b-2 border-white self-center mr-4  w-[20px] ${
          isSelected ? "w-[300px]" : ""
        }`}
      ></div>{" "}
      <div className="uppercase text-[16px]">{name}</div>
    </div>
  )
}
export default NavBar
