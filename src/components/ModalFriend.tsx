import { Cross } from "../assets/Cross"
import { GreenCopyIcon } from "../assets/GreenCopyIcon"
import { ShareArrow } from "../assets/ShareArrow"

interface Props {
  close: () => void
}

export const ModalFriend = ({ close }: Props) => {
  return <>
  <div className="fixed top-0 right-0 bottom-0 left-0 z-[1] flex justify-center items-center" style={{background: "rgba(22, 236, 109, 0.5)"}}>
    <div className="w-[320px] h-[200px] rounded-[12px] pb-[20px] bg-[#2F2D2D] z-[100]" onClick={(e) => e.stopPropagation()}>
      <div className="flex flex-row items-center justify-between border-b border-[#3C3B3B] px-[10px] py-[5px] font-medium text-xl">
        <div>Пригласить друга</div>
        <div onClick={close}><Cross /></div>
      </div>
      <div className="m-[18px] mx-[12px] h-[52px] relative flex"><input type="text" placeholder="https://t.me/tg_..." className="bg-transparent w-[100%] 
border-2 border-[#16EC6D] rounded-[12px] p-[10px]"/><div className="absolute right-[10px] top-[12px]"><GreenCopyIcon /></div></div>
      <div className="w-[296px] h-[52px] ml-[12px] rounded-[12px] py-[20px] px-[40px] flex items-center justify-center bg-[#16EC6D]"><ShareArrow /><div className="ml-[10px] font-medium text-xl text-[#2F2D2D]">Отправить ссылку</div></div>
    </div>
  </div>
  </>
}