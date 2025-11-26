"use client";

import { useEffect, useState } from "react";
import { Home, Server, Clock, Activity } from "lucide-react";
import { useRouter } from "next/navigation";

// --- Types ---
interface DashboardRequest {
  id: number;
  name: string;
  type: string;
  date: string;
  status: string;
}

interface DashboardInstance {
  id: number;
  name: string;
  os: string;
  cpu: number;
  ram: number;
  status: string;
}

export default function DashboardPage() {
  const router = useRouter();

  const [requestData, setRequestData] = useState<DashboardRequest[]>([]);
  const [userInstance, setUserInstance] = useState<DashboardInstance[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- Data Fetching ---
  useEffect(() => {
    async function loadDashboardData() {
      try {
        setIsLoading(true);

        // 1. Fetch both endpoints in parallel for speed
        const [reqRes, instRes] = await Promise.all([
          fetch("/api/user/requests"),
          fetch("/api/user/instances"),
        ]);

        if (!reqRes.ok || !instRes.ok ) throw new Error("Failed to fetch data");
        // if (!instRes.ok ) throw new Error("Failed to fetch data");
        const reqRaw = await reqRes.json();
        const instRaw = await instRes.json();

        // 2. Process Requests (Top Table)
        // Filter out approved ones if you only want to see history/pending
        const mappedRequests = reqRaw
          .filter((item: any) => item.requestStatus !== "approved") 
          .map((item: any) => ({
            id: item.requestId,
            name: item.instantName,
            type: `${item.template?.osTemplate?.osName || "Unknown"} - ${item.template?.instance?.name || "Custom"}`,
            date: new Date(item.requestDate).toLocaleDateString("en-GB"), // dd/mm/yyyy format
            status: capitalize(item.requestStatus),
          }));

        // 3. Process Instances (Bottom Table)
        const mappedInstances = instRaw.map((inst: any) => ({
          id: inst.instanceId,
          // Navigate deep into the nested relation to find names/specs
          name: inst.request?.instantName || "Unnamed",
          os: inst.request?.template?.osTemplate?.osName || "Unknown OS",
          cpu: inst.request?.template?.instance?.cpuAmount || 0,
          ram: inst.request?.template?.instance?.ramAmount || 0,
          status: capitalize(inst.machineState || "Offline"),
        }));

        // 4. Update State (Slice to show only top 3 items)
        setRequestData(mappedRequests.slice(0, 3));
        setUserInstance(mappedInstances.slice(0, 3));

      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  // --- Helpers ---
  const capitalize = (s: string) => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";

  const badgeStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending": return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "approved": 
      case "running": return "bg-green-100 text-green-800 border border-green-200";
      case "rejected":
      case "stopped": return "bg-red-100 text-red-800 border border-red-200";
      default: return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-gray-700 font-sans">
      
      {/* NAVBAR */}
      <nav className="bg-white px-8 py-4 flex items-center gap-4 shadow-sm border-b border-gray-200">
        <div 
          className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition"
          onClick={() => router.push("/dashboard")}
        >
          <div className="bg-purple-100 p-2 rounded-lg">
            <Home size={20} className="text-purple-600" />
          </div>
          <span className="text-lg font-bold text-gray-800">Resource Allocator</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-8 space-y-10">
        
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Overview of your virtual machine requests and active instances.</p>
        </div>

        {/* SECTION 1: REQUESTS */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Clock size={24} className="text-purple-600" />
              <h2 className="text-xl font-bold text-gray-800">Recent Requests</h2>
            </div>
            <button
              onClick={() => router.push("/all-requests")}
              className="px-4 py-2 text-sm font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition"
            >
              View All
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {isLoading ? (
              <div className="p-8 text-center text-gray-500 animate-pulse">Loading requests...</div>
            ) : requestData.length === 0 ? (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="bg-gray-50 p-4 rounded-full mb-3">
                  <Clock size={32} className="text-gray-300" />
                </div>
                <p className="text-gray-500">No pending requests found.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-semibold">ID</th>
                      <th className="px-6 py-4 font-semibold">Instance Name</th>
                      <th className="px-6 py-4 font-semibold">Type</th>
                      <th className="px-6 py-4 font-semibold">Date</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {requestData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-gray-500">#{item.id}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{item.type}</td>
                        <td className="px-6 py-4 text-gray-500 text-sm">{item.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeStyle(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 2: INSTANCES */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Server size={24} className="text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">Your Instances</h2>
            </div>
            <button
              onClick={() => router.push("/all-instances")}
              className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition"
            >
              View All
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {isLoading ? (
              <div className="p-8 text-center text-gray-500 animate-pulse">Loading instances...</div>
            ) : userInstance.length === 0 ? (
              <div className="p-12 text-center flex flex-col items-center">
                 <div className="bg-gray-50 p-4 rounded-full mb-3">
                  <Server size={32} className="text-gray-300" />
                </div>
                <p className="text-gray-500">You don't have any active instances yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Name</th>
                      <th className="px-6 py-4 font-semibold">OS</th>
                      <th className="px-6 py-4 font-semibold">CPU</th>
                      <th className="px-6 py-4 font-semibold">RAM</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {userInstance.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
                           {/* Simple Icon Logic based on OS name */}
                           {item.os.toLowerCase().includes('windows') ? '🪟' : '🐧'} {item.os}
                        </td>
                        <td className="px-6 py-4 text-gray-600">{item.cpu} vCPU</td>
                        <td className="px-6 py-4 text-gray-600">{(item.ram / 1024).toFixed(1)} GB</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold flex w-fit items-center gap-1 ${badgeStyle(item.status)}`}>
                            {item.status === 'Running' && <Activity size={12} className="animate-pulse" />}
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
