import { VideoIcon } from "../assets/VideoIcon";
import { XIcon } from "../assets/XIcon";
import { TikTokIcon } from "../assets/TikTokIcon";
import { TelegramIcon } from "../assets/TelegramIcon";
import { YouTubeIcon } from "../assets/YouTubeIcon";
import Emerald from "../assets/Emerald.png"
import { Arrow } from "../assets/Arrow";

interface Props {
  title: string;
  number: string;
}

export const Quest = ({ title, number }: Props) => {

  return <div className="h-[68px] rounded-[12px] p-[8px] py-[12px] bg-[#2F2D2D] my-[10px]">
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row">
        <div className="ml-[5px]">
          {
          title === "Подпишись на YouTube"
            ? <YouTubeIcon size={"44px"}/>
            : title === "Подпишись на Telegram"
              ? <TelegramIcon size={"44px"}/>
              : title === "Подпишись на TikTok"
                ? <TikTokIcon size={"44px"}/>
                : title === "Подпишись на X"
                  ? <XIcon size={"44px"}/>
                  : <VideoIcon  size={"44px"}/>
          }
        </div>
        <div className="flex flex-col">
          <div className="ml-[12px]">{title}</div>
          <div className="flex flex-row items-center -mt-[5px]"><img src={Emerald}/><div style={{marginTop: "-5px"}}>{number}</div></div>
        </div>
      </div>
      <div className="-mt-[12px]"><Arrow /></div>
      
    </div>
  </div>

}