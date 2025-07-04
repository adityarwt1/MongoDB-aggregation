import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1>This whole MongoDB Agreegation Made By</h1>
        <Link
          href="https://www.linkedin.com/in/aditya-rawat-3862182b0"
          target="_blank"
          className="flex items-center mx-2 justify-center"
        >
          <FaLinkedin size={48} color="#0077B5" />
          LinkedIN (Aditya Rawat)
        </Link>
        <Link
          href="https://github.com/adityarwt1"
          target="_blank"
          className="flex items-center mx-2 justify-center"
        >
          <FaGithub size={48} color="#333" className="invert" />
          GitHub (Aditya Rawat)
        </Link>
      </div>
      <div className="flex flex-col mt-5 border-t-2">
        <div className="text-2xl text-center">Test Agregation</div>
        <Link  href={`/api/count2`} className="p-4">
          <div className="border-2 border-gray-400 p-4 transition hover:scale-110 duration-300">
            1. Count of the total document{" "}
          </div>
        </Link>
        <Link href={`/api/limit`} className="p-4">
          <div className="border-2 border-gray-400 p-4 transition hover:scale-110 duration-300">
            2. Limit with matching field status approved{" "}
          </div>
        </Link>
        <Link href={`/api/match`} className="p-4">
          <div className="border-2 border-gray-400 p-4 transition hover:scale-110 duration-300">
            3. matching age users{" "}
          </div>
        </Link>
        <Link href={`/api/profile`} className="p-4">
          <div className="border-2 border-gray-400 p-4 transition hover:scale-110 duration-300">
            4. agreegation of the firstname and the lastname{" "}
          </div>
        </Link>
        <Link href={`/api/sort`} className="p-4">
          <div className="border-2 border-gray-400 p-4 transition hover:scale-110 duration-300">
            5. sorted user according to the age in accending order.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
