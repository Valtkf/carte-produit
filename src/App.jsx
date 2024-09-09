import "./App.css";
import BladesIcon from "./assets/components/icons/BladesIcon";
import DropDownMenu from "./assets/components/DropDownMenu.jsx";
import StartChallengeButton from "./assets/components/StartChallengeButton.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col items-center border-[1px] border-slate-800 rounded-3xl w-[411px] h-[475px] text-2xl text-slate-800 font-sans p-4">
        <div className="border-[1px] border-red-800 rounded-2xl w-[375px] h-[263px]"></div>
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
    </>
  );
}

export default App;
