import BladesIcon from "./icons/BladesIcon";

export default function StartChallengeButton() {
  return (
    <div>
      <button className="gap-x-4 flex justify-center items-center border-[1px] border-[#E4E4EB] rounded-xl w-[190px] h-[43px] font-medium text-lg custom-shadow">
        <BladesIcon /> Start Challenge
      </button>
    </div>
  );
}
