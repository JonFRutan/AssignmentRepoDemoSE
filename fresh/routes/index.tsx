// Import Fresh framework components
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #ebf8ff;">
      <Head>
        <title>SomethingEthical</title>
      </Head>
      <div style="width: 100%; height: 12rem; background-color: #4299e1; display: flex; align-items: center; justify-content: center;">
        <h1 style="color: white; font-size: 2.5rem; font-weight: bold;">SomethingEthical</h1>
      </div>
      <div style="margin-top: 3rem; display: flex; gap: 2rem;">
        <a href="/login" style="background-color: #48bb78; color: white; padding: 1rem 2rem; border-radius: 0.5rem; font-size: 1.5rem; text-decoration: none;">Log In</a>
        <a href="/register" style="background-color: #ecc94b; color: white; padding: 1rem 2rem; border-radius: 0.5rem; font-size: 1.5rem; text-decoration: none;">Register</a>
      </div>
    </div>
  );
}
