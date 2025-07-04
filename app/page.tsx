import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaDatabase,
  FaSortAmountUpAlt,
  FaFilter,
  FaListOl,
  FaSearch,
  FaUserAlt,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-6 md:mb-0">
            <SiMongodb className="text-green-400 text-5xl mr-4" />
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                MongoDB Aggregation Playground
              </h1>
              <p className="text-gray-400">
                Test and visualize aggregation pipelines
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/aditya-rawat-3862182b0"
              target="_blank"
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
            >
              <FaLinkedin className="mr-2" />
              Aditya Rawat
            </Link>
            <Link
              href="https://github.com/adityarwt1"
              target="_blank"
              className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all"
            >
              <FaGithub className="mr-2" />
              GitHub
            </Link>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12 p-6 bg-gray-800 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            About MongoDB Aggregation
          </h2>
          <p className="mb-4 text-gray-300">
            MongoDB's aggregation framework processes data records and returns
            computed results. It's like a powerful pipeline where documents go
            through multiple stages that transform them.
          </p>
          <div className="flex items-center text-sm text-gray-400">
            <FaDatabase className="mr-2" />
            <span>
              Each stage transforms the documents as they pass through the
              pipeline
            </span>
          </div>
        </section>

        {/* Aggregation Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Aggregation Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Count Documents */}
            <Link href={`/api/count`} className="group">
              <div className="h-full p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-400 transition-all hover:scale-[1.02]">
                <div className="flex items-center mb-3">
                  <div className="p-3 mr-4 rounded-full bg-gray-700 group-hover:bg-green-900/30 transition-all">
                    <FaListOl className="text-green-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-medium">1. Count Documents</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Counts all documents in the collection using{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    countDocuments()
                  </code>
                </p>
                <div className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-green-400">
                    {`await User.countDocuments();`}
                  </pre>
                </div>
              </div>
            </Link>

            {/* Count with Aggregation */}
            <Link href={`/api/count2`} className="group">
              <div className="h-full p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-400 transition-all hover:scale-[1.02]">
                <div className="flex items-center mb-3">
                  <div className="p-3 mr-4 rounded-full bg-gray-700 group-hover:bg-green-900/30 transition-all">
                    <FaListOl className="text-green-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-medium">
                    2. Count with Aggregation
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Uses aggregation pipeline with{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">$count</code>{" "}
                  stage
                </p>
                <div className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-green-400">
                    {`await User.aggregate([
  { $count: "totalDocs" }
]);`}
                  </pre>
                </div>
              </div>
            </Link>

            {/* Match and Limit */}
            <Link href={`/api/limit`} className="group">
              <div className="h-full p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-400 transition-all hover:scale-[1.02]">
                <div className="flex items-center mb-3">
                  <div className="p-3 mr-4 rounded-full bg-gray-700 group-hover:bg-green-900/30 transition-all">
                    <FaFilter className="text-green-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-medium">3. Match & Limit</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Filters documents with{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">$match</code>{" "}
                  and limits results with{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">$limit</code>
                </p>
                <div className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-green-400">
                    {`await User.aggregate([
  { $match: { status: "approved" } },
  { $limit: 5 }
]);`}
                  </pre>
                </div>
              </div>
            </Link>

            {/* Match by Age */}
            <Link href={`/api/match?age=17`} className="group">
              <div className="h-full p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-400 transition-all hover:scale-[1.02]">
                <div className="flex items-center mb-3">
                  <div className="p-3 mr-4 rounded-full bg-gray-700 group-hover:bg-green-900/30 transition-all">
                    <FaSearch className="text-green-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-medium">4. Match by Age</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Filters documents where age matches the query parameter using{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">$match</code>
                </p>
                <div className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-green-400">
                    {`const age = Number(req.nextUrl.searchParams.get("age"));
await User.aggregate([
  { $match: { age } }
]);`}
                  </pre>
                </div>
              </div>
            </Link>

            {/* Project Fullname */}
            <Link href={`/api/profile`} className="group">
              <div className="h-full p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-400 transition-all hover:scale-[1.02]">
                <div className="flex items-center mb-3">
                  <div className="p-3 mr-4 rounded-full bg-gray-700 group-hover:bg-green-900/30 transition-all">
                    <FaUserAlt className="text-green-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-medium">5. Create Fullname</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Uses{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    $project
                  </code>{" "}
                  to concatenate first and last names with{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">$concat</code>
                </p>
                <div className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-green-400">
                    {`await User.aggregate([
  {
    $project: {
      fullname: { $concat: ["$firstname", " ", "$lastname"] }
    }
  }
]);`}
                  </pre>
                </div>
              </div>
            </Link>

            {/* Sort by Age */}
            <Link href={`/api/sort`} className="group">
              <div className="h-full p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-400 transition-all hover:scale-[1.02]">
                <div className="flex items-center mb-3">
                  <div className="p-3 mr-4 rounded-full bg-gray-700 group-hover:bg-green-900/30 transition-all">
                    <FaSortAmountUpAlt className="text-green-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-medium">6. Sort by Age</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Sorts documents by age in ascending order using{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">$sort</code>
                </p>
                <div className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-green-400">
                    {`await User.aggregate([
  { $sort: { age: 1 } } // 1 for ascending, -1 for descending
]);`}
                  </pre>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>Built with Next.js, MongoDB, and Tailwind CSS</p>
          <p className="mt-2">
            Explore more aggregation stages in the{" "}
            <a
              href="https://www.mongodb.com/docs/manual/reference/operator/aggregation/"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              MongoDB documentation
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Page;
