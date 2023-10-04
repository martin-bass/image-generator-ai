"use client";
import React, { useState } from "react";
import axios from "axios";

import Drawer from "../app/Drawer";

const HuggingFaceComponent = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [saveOk, setSaveOk] = useState(false);
  const [gallery, setGallery] = useState<string[]>([]);

  const handleGenerateImage = async () => {
    try {
      if (prompt !== "") {
        const response = await axios.post(
          "https://api-inference.huggingface.co/models/prompthero/openjourney",
          { inputs: prompt },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
            responseType: "blob",
          }
        );
        const imageUrl = window.URL.createObjectURL(new Blob([response.data]));
        setImageUrl(imageUrl);
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoaded(true);
    setPrompt("");
    if (saveOk) {
      gallery.push(imageUrl);
      setGallery(gallery.filter((i) => i !== ""));
    }
  };

  return (
    <div className="container w-full flex flex-col justify-center items-center">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="pt-8 flex justify-center flex-col items-center"
      >
        <input
          type="text"
          placeholder="Write your image..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 max-mobile:w-80"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          required
        />
        <button
          onClick={handleGenerateImage}
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 my-6"
        >
          Generate Image
        </button>
      </form>
      <div className="flex items-center justify-center h-96 bg-gray-300 rounded-2xl sm:w-96 max-sm:w-96 max-mobile:w-80 max-mobile:h-80">
        {imageUrl ? (
          <img src={imageUrl} className="rounded-2xl" alt="Generated" />
        ) : !isLoaded ? (
          <svg
            className="w-10 h-10 text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        ) : (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
      <Drawer
        setSaveOk={setSaveOk}
        saveOk={saveOk}
        gallery={gallery}
        setGallery={setGallery}
      />
    </div>
  );
};

export default HuggingFaceComponent;
