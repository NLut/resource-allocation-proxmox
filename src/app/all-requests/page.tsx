"use client";

import { useEffect, useState } from "react";
import { Home, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RequestListPage() {
  const router = useRouter();
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/user/requests", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          console.error("Failed to fetch user requests:", await res.text());
          return;
        }

        const data = await res.json();

        // ================= MAP =================================
        const mapped = data.map((item: any) => ({
          // ✔ Request ID ที่ถูกต้องตาม API = requestId
          requestId: item.requestId,

          // ✔ Instance name
          name: item.instantName ?? item.instances?.name ?? "-",

          // ตอนนี้ระบบรองรับเฉพาะ Create
          type: "Create",

          date: new Date(item.requestDate).toLocaleDateString(),

          status:
            item.requestStatus === "pending"
              ? "Pending"
              : item.requestStatus === "rejected"
              ? "Rejected"
              : "Approved",
        }));

        const filtered = mapped.filter(
          (item: any) => item.status !== "Approved"
        );

        setRequests(filtered);
      } catch (error) {
        console.error("Error loading requests:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const badgeStyle = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-200 text-gray-800";
      case "Rejected":
        return "bg-red-200 text-gray-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f2ff] text-gray-700">
      {/* HEADER */}
      <div className="bg-[#d5c8ff] px-6 py-4 flex items-center gap-3 shadow">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          <Home size={26} className="text-gray-700" />
          <span className="text-xl font-semibold text-gray-800">Home</span>
        </div>
      </div>

      {/* TITLE + BUTTON */}
      <div className="flex justify-between items-center mt-8 mb-6 px-10">
        <h2 className="text-3xl font-semibold text-gray-800">Request List</h2>

        <button
          onClick={() => router.push("/create-request")}
          className="flex items-center gap-2 px-5 py-2 bg-[#d4c5ff] hover:bg-[#bfb0ff] transition rounded-full shadow-sm"
        >
          <Plus size={20} />
          <span className="text-gray-700 font-medium">Create</span>
        </button>
      </div>

      {/* TABLE */}
      <div className="px-10">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="max-h-96 overflow-y-auto custom-scrollbar">
            {loading ? (
              <p className="text-center py-6 text-gray-400">Loading...</p>
            ) : (
              <table className="w-full border-collapse">
                <thead className="sticky top-0 bg-white">
                  <tr className="text-left text-gray-600 border-b border-purple-200">
                    <th className="pb-3">Request ID</th>
                    <th className="pb-3">Instance Name</th>
                    <th className="pb-3">Request Type</th>
                    <th className="pb-3">Date</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {requests.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-6 text-gray-400">
                        No requests found.
                      </td>
                    </tr>
                  ) : (
                    requests.map((item, index) => (
                      <tr
                        key={`${item.requestId}-${index}`} // ✔ guaranteed unique
                        className="border-b border-purple-100"
                      >
                        <td className="py-4">{item.requestId}</td>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.date}</td>

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
                            onClick={() =>
                              router.push(`/edit-request/${item.requestId}`)
                            }
                            className="px-4 py-1 bg-[#bdb7d3] hover:bg-[#a9a3c4] transition rounded-full text-gray-700"
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
