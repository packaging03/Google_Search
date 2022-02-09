import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      {/* Header */}
      <header
        className="flex w-full p-5 justify-between 
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

          {/* Avatar */}
        </div>
      </header>
      {/* <div className="pt-6">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-200 text-teal-700 my-3 p-4 mx-auto ">
          <h1 className="text-2xl text-sky-700">Hello World</h1>
          <p>
            Lorem Ipsum publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div> */}
    </div>
  );
}
