"use client";
import HuggingFaceComponent from "../app/AIgenerator";
import Footer from "../app/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-8  bg-purple-100 min-w-full m-auto">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
        <a href="/">AI Image Generator</a>
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl">
        Generate your images using Artificial Intelligence{" "}
      </p>
      <HuggingFaceComponent />
      <Footer />
    </main>
  );
}
