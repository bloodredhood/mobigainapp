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

  return <div className="h-[68px] rounded-[12px] p-[8px] py-[12px] bg-[#2F2D2D]">
    <div className="flex flex-row items-center justify-between">
      <div>
        <div>
          {
          title === "Подпишись на YouTube"
            ? <YouTubeIcon />
            : title === "Подпишись на Telegram"
              ? <TelegramIcon />
              : title === "Подпишись на TikTok"
                ? <TikTokIcon />
                : title === "Подпишись на X"
                  ? <XIcon />
                  : <VideoIcon />
          }
        </div>
        <div>
          <div>{title}</div>
          <div><img src={Emerald}/>{number}</div>
        </div>
      </div>
      <div>
        <Arrow />
      </div>
    </div>
  </div>

}