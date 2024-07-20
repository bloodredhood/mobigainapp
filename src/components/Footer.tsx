import { useLocation, useNavigate } from "react-router-dom"
import { FriendsIconGreen } from "../assets/FriendsIconGreen"
import { FriendsIconWhite } from "../assets/FriendsIconWhite"
import { useEffect, useState } from "react"
import { EarnIconWhite } from "../assets/EarnIconWhite"
import { EarnIconGreen } from "../assets/EarnIconGreen"


export const Footer = () => {
  const [friendsState, setFriendsState] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(location)
    if (location.pathname === "/") {
      setFriendsState(true)
    } else {
      setFriendsState(false)
    }
  }, [location])

  const buttonClasses = "flex flex-col items-center justify-center font-medium text-xs select-none"
  const activeText = "text-[#16EC6D] activeLink"

  return (
    <div className="sticky bottom-0 h-[87px] w-screen flex flex-row items-center justify-evenly bg-[#1E1E1E]">
      <div className="flex items-center h-[99%]" onClick={() => navigate("/")}>
        {
          friendsState
            ? <div className={buttonClasses}><FriendsIconGreen /><div className={activeText}>Друзья</div></div>
            : <div className={buttonClasses}><FriendsIconWhite /><div className="">Друзья</div></div>
        }
      </div>
      <div className="flex items-center h-[99%]" onClick={() => navigate("/earn")}>
        {
          friendsState
            ? <div className={buttonClasses}><EarnIconWhite /><div className="">Заработать</div></div>
            : <div className={buttonClasses}> <EarnIconGreen /><div className={activeText}>Заработать</div></div>
        }
      </div>
    </div>
  )

}