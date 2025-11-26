"use client";

import { useEffect, useState } from "react";
import { Home, Plus, FileClock } from "lucide-react";
import { useRouter } from "next/navigation";

// Interface for UI State
interface RequestData {
  id: number;
  name: string;
  type: string;
  date: string;
  status: string;
}

export default function RequestListPage() {
  const router = useRouter();
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadRequests() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/user/requests");
        
        if (!res.ok) throw new Error("Failed to load requests");
        
        const rawData = await res.json();

        // ❗ Display only Pending + Rejected (Exclude Approved)
        // Map database fields to UI fields
        const filteredAndMapped = rawData
          .filter((item: any) => item.requestStatus !== "approved")
          .map((item: any) => ({
            id: item.requestId,
            name: item.instantName,
            // Combine OS and Hardware for the "Type" column
            type: `${item.template?.osTemplate?.osName || "Unknown"} - ${item.template?.instance?.name || "Custom"}`,
            date: new Date(item.requestDate).toLocaleDateString("en-GB"),
            status: capitalize(item.requestStatus),
          }));

        setRequests(filteredAndMapped);
      } catch (error) {
        console.error("Error loading requests:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadRequests();
  }, []);

  const capitalize = (s: string) => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";

  const badgeStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "rejected":
        return "bg-red-100 text-red-800 border border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f2ff] text-gray-700 font-sans">

      {/* ---------------- HEADER (HOME) ---------------- */}
      <div className="bg-[#cfc2ff] px-6 py-4 flex items-center gap-3 shadow">
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
          onClick={() => router.push("/dashboard")}
        >
          <Home size={26} className="text-gray-700" />
          <span className="text-xl font-semibold text-gray-800">
            Home
          </span>
        </div>
      </div>

      {/* ---------------- REQUEST LIST + CREATE ---------------- */}
      <div className="flex justify-between items-center mt-8 mb-6 px-10">
        <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-lg">
                <FileClock size={28} className="text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Request List</h2>
        </div>

        <button
          onClick={() => router.push("/create-request")}
          className="flex items-center gap-2 px-5 py-2 bg-[#d4c5ff] hover:bg-[#bfb0ff] transition rounded-full shadow-sm text-purple-900 font-medium"
        >
          <Plus size={20} />
          <span>Create Request</span>
        </button>
      </div>

      {/* ---------------- TABLE ---------------- */}
      <div className="px-10">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
            
            {isLoading ? (
               <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-2"></div>
                  <p>Loading requests...</p>
               </div>
            ) : (
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="text-left text-gray-600 border-b border-purple-200 uppercase text-sm tracking-wider">
                  <th className="pb-4 pl-4 font-semibold">Request ID</th>
                  <th className="pb-4 font-semibold">Instance Name</th>
                  <th className="pb-4 font-semibold">Request Type</th>
                  <th className="pb-4 font-semibold">Date</th>
                  <th className="pb-4 font-semibold">Status</th>
                  <th className="pb-4 font-semibold text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-purple-50">
                {requests.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-gray-400 flex flex-col items-center justify-center h-48">
                      <FileClock size={40} className="text-gray-200 mb-2" />
                      <p>No pending or rejected requests found.</p>
                    </td>
                  </tr>
                ) : (
                  requests.map((item) => (
                    <tr key={item.id} className="hover:bg-purple-50 transition duration-150">
                      <td className="py-4 pl-4 text-gray-500">#{item.id}</td>

                      <td className="font-medium text-gray-900">{item.name || "-"}</td>

                      <td className="text-gray-600 text-sm">{item.type}</td>
                      <td className="text-gray-500 text-sm">{item.date}</td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeStyle(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="text-center">
                        <button
                          onClick={() => router.push(`/edit-request/${item.id}`)}
                          className="px-4 py-1.5 bg-[#bdb7d3] hover:bg-[#a9a3c4] transition rounded-full text-gray-800 text-sm font-medium shadow-sm"
                        >
                          Edit
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
