"use client"
import Image from "next/image";
import HelloWorld from "./helloworld";

export default function Home() {
  const signup = () =>{
    console.log("This is Sign up function");
  }

  const login = () =>{
    console.log("This is login function");
  }

  const forgetPassword = () => {
    console.log("You clicked on Forget Password Button");
  }

  return (
    <>
      <HelloWorld
        greet="Assalam Alaikum"
        message="How are you?"
        btnLabel="Sign Up"
        handerFunc={signup}
      />

      <HelloWorld
        greet="Hi"
        message="What's Up"
        btnLabel="Log in"
        handerFunc={login}
      />

      <HelloWorld
        greet="Hola Amigos!"
        message="Ti Amo"
        btnLabel="Forget Password?"
        handerFunc={forgetPassword}
      />
    </>
  );
}
