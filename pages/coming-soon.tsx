import React from "react";
import Link from "next/link";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 pt-[100px]">
      <h1 className="text-4xl font-bold mb-2">Coming Soon</h1>
      <p className="text-center mb-4">
        We are working hard to finish the development of this site. Our target
        launch date is
        <strong> August 2023</strong>!
      </p>
      <Link href="/">
        <div className="btn btn-primary text-white p-2 rounded-md">
          Go to Home Page
        </div>
      </Link>
    </div>
  );
};

export default ComingSoon;
