"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./banner.module.css";
import Image from "next/image";
import { Button } from "@mui/material";

export default function Banner() {
  const router = useRouter();
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  /*.bannerText {
  position: relative;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 160px;
  padding-right: 160px;
  top: 80px;
  z-index: 30;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.5);

} */
  return (
    <div
      className="block p-[8px] m-[0px] w-[100vw] h-[640px] relative overflow-hidden rounded-[24px]"
      onClick={() => {
        setIndex((index + 1) % 4);
        // alert(index);
      }}
    >
      <Image
        src={covers[index]}
        alt="Banner"
        fill={true}
        priority
        objectFit="cover"
      />
      {/* <div className={styles.bannerText}> */}
      <div className="relative px-16 py-160 z-30 text-center bg-lime-900/90 text-white top-[80px]">
        <h1 className="text-4xl pb-5 font-bold">Vaccine Service Center</h1>
        <p className="text-xl">
          We're pleased to announce that vaccination appointments are now
          available at{" "}
          <a
            href="https://youtu.be/xvFZjo5PgG0?si=nBogDFqQOyONC3Fr"
            target="_blank"
          >
            Risiraj Hospital
          </a>
          . Protect yourself and your loved ones by scheduling your appointment
          today! All eligible individuals can receive their vaccine, and
          walk-ins are welcome. Stay safe, stay healthy, and help us move toward
          a brighter future. For more information, visit{" "}
          <a
            href="https://youtu.be/xvFZjo5PgG0?si=nBogDFqQOyONC3Fr"
            target="_blank"
          >
            our official website
          </a>{" "}
          or call 248-434-5508. Together, we can end this pandemic!
        </p>
      </div>
      {/* <Button variant="contained" onClick={(e) => {
          e.stopPropagation();
          router.push("/hospital/");
        }}>Contained</Button> */}
      <button
        className="z-30 absolute bottom-0 right-0 m-[48px] p-[8px] text-[24px] rounded-[8px] 
        border-2 border-lime-900 bg-lime-300 px-4 py-4 text-black hover:bg-lime-600 hover:font-bold hover:text-white hover:border-0"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/hospital/");
        }}
      >
        Select Hospital
      </button>
    </div>
  );
}
