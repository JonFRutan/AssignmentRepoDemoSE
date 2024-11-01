import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import RegisterForm from "../islands/RegisterForm.tsx";

export default function Register() {
  return (
    <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: top; background-color: #313146;">
      <Head>
        <title>Register</title>
      </Head>
      <div style="width: 100%; height: 8rem; background-color: #6d76ff; display: flex; align-items: center; justify-content: center;">
        <h1 style="color: white; font-size: 2.5rem; font-weight: bold;">Register</h1>
      </div>
      <RegisterForm />
    </div>
  );
}
