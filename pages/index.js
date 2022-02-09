import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import styles from "../styles/Home.module.css";
import { MdApps } from "react-icons/md";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
// MdApps;

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      {/* Header */}
      <header
        className="flex w-full p-4 justify-between 
       text-sm text-gray-700"
      >
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <MdApps className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I6JXjFF5oXvDHpKLgliCO3Zab7wy3pZiSw9RqzR7A=s64-c-mo" />
        </div>
      </header>

      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt="Google Logo"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500 " />
          <input type="text" className="focus:outline-none flex-grow " />
          <MicrophoneIcon className="h-5 ml-3" />
        </div>
        <div className="flex mt-8 space-x-4 justify-center ">
          <button className="btn">Google Search</button>
          <button className="btn">I&apos;m Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
