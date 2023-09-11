import Image from "next/image";
import SignUp from "./components/sign-up";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <SignUp></SignUp>
    </main>
  );
}
