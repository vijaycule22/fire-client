"use client";
import CustomButton from "./customButton";
import Login from "./login/page";



export default function Home() {
  return (
    <div className="h-100 mt-24">
      <CustomButton buttonText="my button" onClick={() => console.log("hello")} />
    </div>
  );
}
