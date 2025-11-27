"use client";

import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// ดึง mock data
import { getUserInstances } from "../../mock-data/instanceService";

export default function ViewUserInstancePage() {
  const router = useRouter();
  const [instances, setInstances] = useState<any[]>([]);

  useEffect(() => {
    const data = getUserInstances();   // ⭐ ไม่ต้อง await
    setInstances(data);
  }, []);

  const badgeStyle = (status: string) => {
    switch (status) {
      case "On":
        return "bg-green-200 text-gray-800";
      case "OFF":
        return "bg-gray-300 text-gray-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f2ff] text-gray-700">

      {/* NAVBAR */}
      <div className="bg-[#cfc2ff] px-6 py-4 flex items-center justify-between shadow">
        
        {/* LEFT HOME SECTION */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          <Home size={26} className="text-gray-700" />
          <span className="text-xl font-semibold text-gray-800">
            Home
          </span>
        </div>

        {/* Right Placeholder */}
        <div></div>
      </div>

      <div className="p-10">

        <h2 className="text-3xl font-semibold text-gray-800 mb-5">
          User Instance List
        </h2>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="max-h-64 overflow-y-auto custom-scrollbar">

            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-white">
                <tr className="text-left text-gray-600 border-b border-purple-200">
                  <th className="pb-3">Instance Name</th>
                  <th className="pb-3">OS</th>
                  <th className="pb-3">CPU</th>
                  <th className="pb-3">RAM</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {instances.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-6 text-gray-400"
                    >
                      No instances found.
                    </td>
                  </tr>
                ) : (
                  instances.map((item) => (
                    <tr key={item.id} className="border-b border-purple-100">
                      <td className="py-4">{item.name}</td>
                      <td>{item.os}</td>
                      <td>{item.cpu}</td>
                      <td>{item.ram}</td>

                      <td>
                        <span
                          className={`px-4 py-1 rounded-full text-sm ${badgeStyle(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td>
                        <button
                          onClick={() => router.push(`/view-instance/${item.id}`)}
                          className="px-4 py-1 bg-[#bdb7d3] hover:bg-[#a9a3c4] transition rounded-full text-gray-700"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>

          </div>
        </div>

      </div>

    </div>
  );
}
