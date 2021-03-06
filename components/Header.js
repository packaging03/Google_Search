import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { MdApps, MdSettings, MdSettingsApplications, MdSettingsSuggest } from "react-icons/md";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/Search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          alt="Logo"
          onClick={() => router.push("/")}
        />
        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border
       border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
        >
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer 
        transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon
            className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 
        pl-4 border-gray-300"
          />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        
        <div className="flex space-x-2 items-center ml-auto">
          {/* Icon */}
          <MdSettings className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <MdApps className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer mr-3" />

          {/* Avatar */}
          <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I6JXjFF5oXvDHpKLgliCO3Zab7wy3pZiSw9RqzR7A=s64-c-mo" />
        </div>
      </div>

      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
