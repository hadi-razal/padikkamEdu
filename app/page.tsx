import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Image
          alt="Photo"
          src="/phto.jpg"
          width={600}
          height={400}
          className="object-cover"
        />
      </div>
      <p className="mt-6 text-2xl font-semibold tracking-wide text-center">
        Rayan, Haiqa, Mariyu
      </p>
    </div>
  );
};

export default Home;
