import { useState, useEffect, useRef } from "react";
import DropDownMenuIcon from "./icons/DropDownMenuIcon";
import EditIcon from "./icons/EditIcon";
import ShareIcon from "./icons/ShareIcon";
import TrashIcon from "./icons/TrashIcon";

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div ref={menuRef}>
      <button
        onClick={toggleDropdown}
        id="dropdownDefaultButton"
        className={`flex justify-center items-center border-[1px] rounded-xl w-[44px] h-[44px] font-medium text-lg custom-shadow ${
          isOpen ? "border-black" : "border-[#E4E4EB]" // Applique la bordure noire si le menu est ouvert, sinon gris clair
        }`}
      >
        <DropDownMenuIcon />
      </button>

      <div
        id="dropdown"
        className={`z-10 absolute left-[180px] top-10 mt-2 divide-y divide-gray-100 rounded-lg border-[1px] border-[#E4E4EB] w-[200px] bg-white transform transition-transform duration-300 ease-out ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-50 opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className="flex items-start flex-col py-2 text-sm text-black p-2"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="flex justify-center items-center px-4 py-2 hover:bg-gray-100 hover:rounded-lg"
            >
              <div className="mr-2">
                <EditIcon />
              </div>
              Edit Challenge
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" flex justify-center items-center px-4 py-2 hover:bg-gray-100 hover:rounded-lg"
            >
              <div className="mr-[10px]">
                <ShareIcon />
              </div>
              Share Challenge
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-center items-center px-4 py-2 hover:bg-gray-100 hover:rounded-lg text-[#D73F3EE5]"
            >
              <div className="mr-2">
                <TrashIcon />
              </div>
              Delete Challenge
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
