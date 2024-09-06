import "./App.css";
import BladesIcon from "./assets/components/icons/BladesIcon";
import DropDownMenuIcon from "./assets/components/DropDownMenuIcon.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col items-center border-[1px] border-slate-800 rounded-3xl w-[411px] h-[475px] text-2xl text-slate-800 font-sans p-4">
        <div className=" border-[1px] border-red-800 rounded-2xl w-[375px] h-[263px]"></div>
        <div className="border-[1px] border-red-800 flex justify-between items-end w-full">
          <h1 className="text-xl mt-4">Raycast Wallpaper #1</h1>
          <h2 className="flex justify-center items-center text-xs font-medium bg-slate-200 w-[62px] h-[26px] rounded-md">
            premium
          </h2>
        </div>
        <div className="flex justify-start w-full border-[1px] border-green-800">
          <h2 className="text-sm font-normal text-[#090C15] opacity-50">
            Recreate this wallpaper uisng AI.
          </h2>
        </div>
        <div className="border-[1px] border-blue-800 flex justify-between items-end w-full">
          <button className="gap-x-4 flex justify-center items-center border-[1px] border-[#E4E4EB] rounded-xl w-[190px] h-[43px] font-medium text-lg custom-shadow">
            <BladesIcon /> Start Challenge
          </button>
          <button className="flex justify-center items-center border-[1px] border-[#E4E4EB] rounded-xl w-[44px] h-[44px] font-medium text-lg custom-shadow">
            <DropDownMenuIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
