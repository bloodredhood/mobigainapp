import { useState } from "react"
import EmeraldHuge from "../assets/EmeraldHuge.png"
import { Data } from "../App"
import { Quest } from "../components/Quest";
import { ModalEarn } from "../components/ModalEarn";


interface Props {
  earn: Array<Data>;
}

export const Earn = ({ earn }: Props) => {

  const [isModalShow, setIsModalShow] = useState(false)

  return <div className="select-none mb-[55px]">
    <div className="flex flex-col items-center border-b border-[#2F2D2D] pb-1.5">
      <div className="h-[110px] w-[110px]"><img src={EmeraldHuge} alt="" className=""/></div>
      <div className="text-2xl font-bold">Зарабатывай еще больше!</div>
    </div>
    <div className="mx-[5%]">
      <div className="my-[15px] font-bold text-xl">Список заданий</div>
        {earn.map(el => <Quest title={el.title} number={el.number} />)}
    </div>
    {
    isModalShow && earn.map(el => <ModalEarn title={el.title} number={el.number} close={() => setIsModalShow(false)} /> )
    }
  </div>
}