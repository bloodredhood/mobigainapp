import { FriendsAddLogo } from "../assets/FriendsAddLogo"
import Emerald from "../assets/Emerald.png"
import Avatar from "../assets/Avatar.png"
import { useEffect, useState } from "react"
import { Data } from "../App"
import { ModalFriend } from "../components/ModalFriend"

const lightZonesStyle = "rounded-[12px] bg-[#2F2D2D] p-3"
const lightZonesTitle = "text-base font-bold pb-2.5"
const lightZonesLine = "flex items-center justify-center font-medium -mb-1.5"

interface Props {
  friends: Array<Data>;
}

export const Friends = ({ friends }: Props) => {
  const [isModalShow, setIsModalShow] = useState(false)

  useEffect
  return <div className="select-none mb-[55px]">
    <div className="flex flex-col items-center border-b border-[#2F2D2D] pb-1.5">
      <FriendsAddLogo />
      <div className="text-2xl font-bold">Зарабатывай вместе <br/>с друзьями!</div>
    </div>
    <div className="w-screen">
      <div className="flex items-start justify-between mx-[5%] my-3.5">
        <div className={`${lightZonesStyle} w-[48%]`}>
          <div className={lightZonesTitle}>Пригласить друга</div>
          <div className={lightZonesLine}><img src={Emerald} alt="" /><p className="pr-3.5">+100 тебе</p></div>
          <div className={lightZonesLine}><img src={Emerald} alt="" /><p className="pr-3.5">+1000 ему</p></div>
        </div>
        <div className={`${lightZonesStyle} w-[48%]`}>
          <div className={lightZonesTitle}>Пригласить друга c <span className="text-[#16EC6D]">TG Premium</span></div>
          <div className={lightZonesLine}><img src={Emerald} alt="" /><p className="pr-3.5">+500 тебе</p></div>
          <div className={lightZonesLine}><img src={Emerald} alt="" /><p className="pr-3.5">+1000 ему</p></div>
        </div>
      </div>
      <div className={`${lightZonesStyle} flex flex-col mx-[5%]`}>
        <div className="flex flex-row justify-between w-[95%] m-[10px]">
          <div className="font-medium text-xl">Приглашенные друзья</div>
          <div className="text-base font-bold rounded-[20px] py-[4px] px-[10px] bg-[#16EC6D]">{friends.length}</div>
        </div>
        <div className="flex flex-col m-[10px]">
          {friends.map((el, idx) =>
            <div className="flex flex-row justify-between my-[5px]">
              <div className="flex flex-row items-center">
                <div>{idx + 1}</div>
                <div className=" mx-[10px]"><img src={Avatar} /></div>
                <div>{el.title}</div>
              </div>
              <div className="flex flex-row items-center">
                <div><img src={Emerald} /></div>
                <div>{el.number}</div>
              </div>
            </div>
          )}
        </div>
        {isModalShow && (
          <ModalFriend close={() => setIsModalShow(false)} />
        )}
      </div>
    </div>
    <div className="sticky font-medium text-xl flex items-center justify-center bottom-[55px] rounded-[20px] h-[52px] shadow-[0px_0px_8px_0px_#298225] bg-[#16EC6D] text-[#1E1E1E]" onClick={() => setIsModalShow(true)}>Пригласить друга
    </div>
  </div>
}