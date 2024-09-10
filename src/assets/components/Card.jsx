import DropDownMenu from "./DropDownMenu";
import StartChallengeButton from "./StartChallengeButton";
import BgRed1 from "./images/BgRed1.png";
import BgRed2 from "./images/BgRed2.png";
import BgBlack from "./images/BgBlack.png";
export default function Card() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-y-8 gap-x-8">
      <div className="flex flex-col items-center border-[1px] border-slate-800 rounded-3xl w-[411px] h-[475px] text-2xl text-slate-800 font-sans p-4">
        <div className="  rounded-2xl w-[375px] h-[263px]">
          <img
            src={BgRed1}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex justify-between items-end w-full">
          <h1 className="text-xl mt-4 mb-2">Raycast Wallpaper #1</h1>
          <h2 className="flex justify-center items-center text-xs font-medium bg-slate-200 w-[62px] h-[26px] rounded-md">
            premium
          </h2>
        </div>
        <div className="flex justify-start w-full ">
          <h2 className="text-sm font-normal text-[#090C15] opacity-50">
            Recreate this wallpaper using AI.
          </h2>
        </div>
        <div className="flex justify-between items-end w-full relative mt-16">
          <StartChallengeButton />
          <DropDownMenu />
        </div>
      </div>
      <div className="flex flex-col items-center border-[1px] border-slate-800 rounded-3xl w-[411px] h-[475px] text-2xl text-slate-800 font-sans p-4">
        <div className="  rounded-2xl w-[375px] h-[263px]">
          <img
            src={BgBlack}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex justify-between items-end w-full">
          <h1 className="text-xl mt-4 mb-2">Raycast Wallpaper #1</h1>
          <h2 className="flex justify-center items-center text-xs font-medium bg-slate-200 w-[62px] h-[26px] rounded-md">
            premium
          </h2>
        </div>
        <div className="flex justify-start w-full ">
          <h2 className="text-sm font-normal text-[#090C15] opacity-50">
            Recreate this wallpaper using AI.
          </h2>
        </div>
        <div className="flex justify-between items-end w-full relative mt-16">
          <StartChallengeButton />
          <DropDownMenu />
        </div>
      </div>
      <div className="flex flex-col items-center border-[1px] border-slate-800 rounded-3xl w-[411px] h-[475px] text-2xl text-slate-800 font-sans p-4">
        <div className="  rounded-2xl w-[375px] h-[263px]">
          <img
            src={BgRed2}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex justify-between items-end w-full">
          <h1 className="text-xl mt-4 mb-2">Raycast Wallpaper #1</h1>
          <h2 className="flex justify-center items-center text-xs font-medium bg-slate-200 w-[62px] h-[26px] rounded-md">
            premium
          </h2>
        </div>
        <div className="flex justify-start w-full ">
          <h2 className="text-sm font-normal text-[#090C15] opacity-50">
            Recreate this wallpaper using AI.
          </h2>
        </div>
        <div className="flex justify-between items-end w-full relative mt-16">
          <StartChallengeButton />
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
}
