"use client";
import signUpImage from "../../public/images/illustration-sign-up-desktop.svg";
import Image from "next/image";
import Button from "./button";
import ListItem from "./list-item";
import ListImage from "../../public/images/icon-list.svg";
import Modal from "./modal";
import { SyntheticEvent } from "react";
import { useState } from "react";
import Heading from "./heading";

export default function SignUp() {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  function openModal() {
    setOpen(true);
    console.log(open);
  }
  function closeModal() {
    setOpen(false);
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    openModal();
  }
  return (
    <div className="rounded-xl bg-white grid-cols-1 grid-rows-2  sm:grid-cols-2 sm:grid-rows-1 grid max-w-3xl max-h-screen  ">
      <div className="flex flex-col gap:2 sm:gap-6 sm:col-start-1 sm:col-span-1 m-5 sm:pl-5 sm:pt-10 sm:pb-10 row-start-2 row-span-1">
        <Heading>Stay updated!</Heading>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="flex flex-col gap-2">
          <ListItem image={ListImage}>
            Product discovery and building what matters
          </ListItem>
          <ListItem image={ListImage}>
            Measuring to ensure update are a success
          </ListItem>
          <ListItem image={ListImage}>And much more!</ListItem>
        </ul>
        <form
          action="/"
          method="POST"
          id="form1"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="email" className="label text-sm font-bold">
            Email adress
          </label>
          <input
            type="email"
            id="email"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-md border border-gray p-2 w-full active:border-black "
          />
        </form>
        <Button form="form1" type="submit">
          Subscribe to monthly newsletter
        </Button>
      </div>
      <div className="relative m-5 rounded-lg sm:col-start-2 sm:col-span-1 row-start-1 row-span-1 sm:row-start-2">
        <Image
          src={signUpImage}
          alt="image"
          fill={true}
          objectFit="cover"
          className="rounded-lg"
        ></Image>
      </div>
      <Modal open={open} closeModal={closeModal} email={email}></Modal>
    </div>
  );
}
