import { Cross } from "../assets/Cross"
import { VideoIcon } from "../assets/VideoIcon";
import { XIcon } from "../assets/XIcon";
import { TikTokIcon } from "../assets/TikTokIcon";
import { TelegramIcon } from "../assets/TelegramIcon";
import { YouTubeIcon } from "../assets/YouTubeIcon";
import EmeraldMedium from "../assets/EmeraldMedium.png"
import { useEffect } from "react";


interface Props {
  title: string;
  number: string;
  close: () => void
}

export const ModalEarn = ({ title, number, close }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      console.log(title, number)
    }, 200);
  },[])

  return <>
    <div className="fixed top-0 right-0 bottom-0 left-0 z-[1] flex justify-center items-center" style={{ background: "rgba(22, 236, 109, 0.5)" }}>
      <div className="w-[390px] h-[400px] rounded-[12px] pb-[20px] bg-[#2F2D2D] z-[100]" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-row items-center justify-end px-[10px] py-[5px] font-medium text-xl">
          <div onClick={close}><Cross /></div>
        </div >
        <div>
          <div className="flex justify-center items-center mt-[10px]">
            <div className="">
              {
                title === "Подпишись на YouTube"
                  ? <YouTubeIcon size={"100px"} />
                  : title === "Подпишись на Telegram"
                    ? <TelegramIcon size={"100px"} />
                    : title === "Подпишись на TikTok"
                      ? <TikTokIcon size={"100px"} />
                      : title === "Подпишись на X"
                        ? <XIcon size={"100px"} />
                        : <VideoIcon size={"100px"} />
              }
            </div>
          </div>
          <div className="my-[25px]">
            <div className="font-bold text-xl">{title}</div>
            <div className="font-normal text-base">Там много интересного контента!</div>
          </div>
          <div className="flex justify-center items-center -ml-[24px] mx-[20px]">
            <img src={EmeraldMedium} alt="" /><div className="-mt-[5px] -ml-[5px] font-bold text-xl">{number}</div>
          </div>
          <div className="flex flex-row justify-center mt-[20px]">
            <div className="font-medium text-xl flex items-center justify-center rounded-[20px] w-[366px] h-[52px] shadow-[0px_0px_8px_0px_#298225] bg-[#16EC6D] text-[#1E1E1E]">
              Подписаться
            </div>
          </div>

        </div>

      </div>
    </div>
  </>
}