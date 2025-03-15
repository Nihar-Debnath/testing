import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst({
    select: {
      username: true,
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, {user?.username}!
        </h1>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
}
