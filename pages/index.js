import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import styles from "../styles/Home.module.css";
import { MdApps } from "react-icons/md";
// MdApps;

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
