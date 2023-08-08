import React from "react";
import Link from "next/link";

const ComingSoon: React.FC = () => {
  return (
    <div className="bg-[url('/static/under-construction.jpg')] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center min-h-screen py-2 pt-[100px] backdrop-blur-sm backdrop-filter backdrop-grayscale">
        <h1 className="text-6xl font-bold text-white mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Coming Soon
        </h1>
        <p className="text-center text-white mb-4 text-2xl ">
          We are still working to finish the development of this site. Our
          target launch date is
          <strong> August 2023</strong>!
        </p>
        <Link href="/">
          <div className="btn btn-primary text-white p-2 rounded-md">
            Go to Home Page
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
