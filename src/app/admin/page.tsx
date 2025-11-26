"use client";

import { Home, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define the shape of data for the table
interface AdminRequestItem {
  id: number;
  instanceName: string;
  os: string;
  cpu: number;
  ram: number;
}

export default function AdminRequestList() {
  const router = useRouter();
  const [requests, setRequests] = useState<AdminRequestItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        
        // 1. Fetch from Real API
        // This endpoint defaults to returning ONLY "pending" requests, so we don't need to filter manually.
        const res = await fetch("/api/admin/requests");

        if (!res.ok) throw new Error("Failed to fetch requests");

        const data = await res.json();

        // 2. Map Database Structure -> UI Structure
        // The API returns nested objects (template -> instance -> cpuAmount).
        // We flatten them here for the table.
        const mappedRequests = data.map((item: any) => ({
          id: item.requestId,
          instanceName: item.instantName, 
          os: item.template?.osTemplate?.osName || "Unknown OS",
          cpu: item.template?.instance?.cpuAmount || 0,
          ram: item.template?.instance?.ramAmount || 0,
        }));

        setRequests(mappedRequests);
      } catch (error) {
        console.error("Error loading admin requests:", error);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f2ff] text-gray-700 font-sans">

      {/* NAVBAR */}
      <div className="bg-[#cfc2ff] px-6 py-4 flex items-center gap-3 shadow">
        <Home size={26} className="text-gray-700" />
        <span className="text-xl font-semibold text-gray-800">
          Admin Dashboard
        </span>
      </div>

      <div className="p-10">

        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Pending Request List
        </h2>

        {/* TABLE BOX */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="max-h-96 overflow-y-auto custom-scrollbar">

            {isLoading ? (
               <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                  <Loader2 className="animate-spin text-purple-600 mb-2" size={32} />
                  <p>Loading pending requests...</p>
               </div>
            ) : (
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="text-left text-gray-600 border-b border-purple-200 uppercase text-sm tracking-wider">
                  <th className="pb-4 pl-4 font-semibold">Instance Name</th>
                  <th className="pb-4 font-semibold">OS</th>
                  <th className="pb-4 font-semibold">CPU</th>
                  <th className="pb-4 font-semibold">RAM</th>
                  <th className="pb-4 font-semibold text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-purple-50">
                {requests.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center py-12 text-gray-400"
                    >
                      No pending requests found. Good job!
                    </td>
                  </tr>
                ) : (
                  requests.map((item) => (
                    <tr key={item.id} className="hover:bg-purple-50 transition duration-150">
                      <td className="py-4 pl-4 font-medium text-gray-900">{item.instanceName}</td>
                      <td className="text-gray-600 flex items-center gap-2">
                         {item.os.toLowerCase().includes('windows') ? '🪟' : '🐧'} {item.os}
                      </td>
                      <td className="text-gray-600">{item.cpu} vCPU</td>
                      <td className="text-gray-600">{(item.ram / 1024).toFixed(0)} GB</td>
                      <td className="text-center">
                        <button
                          onClick={() => router.push(`/admin/${item.id}`)}
                          className="px-5 py-1.5 bg-[#d4c5ff] hover:bg-[#bfb0ff] transition rounded-full text-purple-900 font-medium text-sm shadow-sm"
                        >
                          Review
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
