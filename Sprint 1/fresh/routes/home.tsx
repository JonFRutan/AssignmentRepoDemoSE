import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #f0f0f0;">
      <Head>
        <title>Welcome Home</title>
      </Head>
      <header style="background-color: #6d76ff; width: 100%; padding: 1rem; display: flex; justify-content: center; align-items: center;">
        <h1 style="color: white; font-size: 2.5rem;">Welcome to the Home Page</h1>
      </header>
      <main style="margin-top: 2rem; text-align: center;">
        <p style="font-size: 1.5rem; color: #333;">You have successfully logged in.</p>
        <p style="font-size: 1.5rem; color: #333;">From here we will implement a user session.</p>
      </main>
    </div>
  );
}
