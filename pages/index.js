import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <div className="pt-6">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-200 text-teal-700 my-3 p-4 mx-auto ">
          <h1 className="text-2xl text-sky-700">Hello World</h1>
          <p>
            Lorem Ipsum publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
