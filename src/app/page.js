import Image from "next/image";
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
   <div className="text-2xl font-bold  py-6">
   <p>Hello world</p>
   <LoginButton/>
   </div>
  );
}
