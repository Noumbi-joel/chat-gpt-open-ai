import React from "react";

// icons
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="px-5 overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#FFF] scrollbar-thumb-rounded-xl scrollbar-thin h-screen text-white flex flex-col justify-start sm:justify-center items-center">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex flex-col sm:flex-row space-x-2 space-y-5 sm:space-y-0 text-center">
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun icon */}
            <h2>Example</h2>
            <SunIcon className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun icon */}
            <h2>Capabilities</h2>
            <BoltIcon className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">
              Messages are stored in Firebase's Realtime Database
            </p>
            <p className="infoText">
              Hot Toast notifications when ChatGPT is thinking!
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun icon */}
            <h2>Limitations</h2>
            <ExclamationTriangleIcon className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
