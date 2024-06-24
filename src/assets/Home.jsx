/** @format */

import React, { useState } from "react";

function Home() {
  const [joke, setJoke] = useState("Your Life");
  const [isLoading, setIsLoading] = useState(false);

  async function getThatJoke() {
    try {
      setJoke("You have to wait son...");
      setIsLoading(true);
      let apiKey = "IPZIYmjNcqY8O8B8BhIewQ==waj5GFQWrbQ8khJU";
      let response = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
        headers: {
          "X-Api-Key": apiKey,
        },
      });
      let data = await response.json();
      let newJoke = data[0].joke;
      setJoke(newJoke);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke. Try again!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='home'>
      <div className='mx-auto py-6'>
        <div className='max-w-2xl mx-auto text-center bg-gradient-to-r from-yellow-200 via-green-200 to-purple-300 p-8 rounded-3xl shadow-lg'>
          <h1 className='text-4xl font-bold text-cyan-800 mb-6'>
            DAD JOKES GENERATOR
          </h1>
          <p className='text-2xl text-cyan-800 mb-6'>{joke}</p>
          <button
            onClick={getThatJoke}
            disabled={isLoading}
            className='bg-gradient-to-r from-yellow-200 via-green-200 to-purple-300 text-cyan-800 font-semibold py-3 px-6 rounded-xl text-xl w-72 border border-slate-300 hover:bg-gradient-to-l hover:shadow-inner hover:shadow-yellow-100 hover:text-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? "Don't click" : "Get A Joke"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
