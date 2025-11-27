"use client";

import { useEffect, useState } from "react";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

// Define simpler interfaces for your UI state
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

    useEffect(() => {
        async function loadData() {
            try {
                setIsLoading(true);
                // 1. Fetch both APIs in parallel
                const [reqRes, instRes] = await Promise.all([
                    fetch("/api/user/requests"),
                    fetch("/api/user/instances"),
                ]);

                if (!reqRes.ok || !instRes.ok) throw new Error("Failed to fetch data");

                const reqRaw = await reqRes.json();
                const instRaw = await instRes.json();

                // 2. Process Requests (Top Table)
                // Filter out approved items (show only pending/rejected)
                const mappedRequests = reqRaw
                    .filter((item: any) => item.requestStatus !== "approved")
                    .map((item: any) => ({
                        id: item.requestId,
                        name: item.instantName,
                        // Combine OS and Hardware names
                        date: new Date(item.requestDate).toLocaleDateString(),
                        status: capitalize(item.requestStatus),
                    }));

                // 3. Process Instances (Bottom Table)
                // Use the dedicated /api/user/instances endpoint
                const mappedInstances = instRaw.map((inst: any) => ({
                    id: inst.instanceId,
                    name: inst.request?.instantName || "Unknown",
                    os: inst.request?.template?.osTemplate?.osName || "Unknown OS",
                    cpu: inst.request?.template?.instance?.cpuAmount || 0,
                    ram: inst.request?.template?.instance?.ramAmount || 0,
                    status: capitalize(inst.machineState || "Offline"),
                }));

                // Limit to top 3 as requested
                setRequestData(mappedRequests.slice(0, 3));
                setUserInstance(mappedInstances.slice(0, 3));
            } catch (error) {
                console.error("Dashboard data error:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadData();
    }, []);

    const capitalize = (s: string) =>
        s ? s.charAt(0).toUpperCase() + s.slice(1) : "";

    const badgeStyle = (status: string) => {
        switch (status.toLowerCase()) {
            case "pending":
                return "bg-yellow-200 text-gray-800";
            case "approved":
            case "running": // Added running state
                return "bg-green-200 text-gray-800";
            case "rejected":
            case "stopped":
                return "bg-red-200 text-gray-800";
            default:
                return "bg-gray-200 text-gray-800";
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f2ff] text-gray-700">
            {/* NAVBAR */}
            <div className="flex items-center gap-3 bg-[#cfc2ff] px-6 py-4 shadow">
                <Home
                    size={26}
                    className="cursor-pointer text-gray-700"
                    onClick={() => router.push("/dashboard")}
                />
                <span
                    className="cursor-pointer text-xl font-semibold text-gray-800"
                    onClick={() => router.push("/dashboard")}
                >
                    Home
                </span>
            </div>

            <div className="p-10">
                {/* REQUEST INSTANCE */}
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Request Instance
                    </h2>

                    <button
                        onClick={() => router.push("/all-requests")}
                        className="rounded-full bg-[#d4c5ff] px-5 py-2 text-gray-700 shadow-sm transition hover:bg-[#bfb0ff]"
                    >
                        View
                    </button>
                </div>

                {/* PREVIEW REQUEST TABLE */}
                <div className="mb-12 rounded-3xl bg-white p-6 shadow-sm">
                    <div className="custom-scrollbar max-h-64 overflow-y-auto">
                        {isLoading ? (
                            <div className="p-4 text-center text-gray-500">
                                Loading requests...
                            </div>
                        ) : requestData.length === 0 ? (
                            <div className="p-4 text-center text-gray-500">
                                No pending requests found.
                            </div>
                        ) : (
                            <table className="w-full border-collapse">
                                <thead className="sticky top-0 bg-white">
                                    <tr className="border-b border-purple-200 text-left text-gray-600">
                                        <th className="pb-3">Instance ID</th>
                                        <th className="pb-3">Instance Name</th>
                                        <th className="pb-3">Date</th>
                                        <th className="pb-3">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {requestData.map((item) => (
                                        <tr key={item.id} className="border-b border-purple-100">
                                            <td className="py-4">#{item.id}</td>
                                            <td>{item.name ?? "-"}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                <span
                                                    className={`rounded-full px-4 py-1 text-sm ${badgeStyle(item.status)}`}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>

                {/* USER INSTANCE */}
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        User Instance
                    </h2>

                    <button
                        onClick={() => router.push("/all-instances")}
                        className="rounded-full bg-[#d4c5ff] px-5 py-2 text-gray-700 shadow-sm transition hover:bg-[#bfb0ff]"
                    >
                        View
                    </button>
                </div>

                {/* PREVIEW INSTANCE TABLE */}
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="custom-scrollbar max-h-64 overflow-y-auto">
                        {isLoading ? (
                            <div className="p-4 text-center text-gray-500">
                                Loading instances...
                            </div>
                        ) : userInstance.length === 0 ? (
                            <div className="p-4 text-center text-gray-500">
                                No active instances found.
                            </div>
                        ) : (
                            <table className="w-full border-collapse">
                                <thead className="sticky top-0 bg-white">
                                    <tr className="border-b border-purple-200 text-left text-gray-600">
                                        <th className="pb-3">Instance Name</th>
                                        <th className="pb-3">OS</th>
                                        <th className="pb-3">CPU</th>
                                        <th className="pb-3">RAM</th>
                                        <th className="pb-3">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {userInstance.map((item) => (
                                        <tr key={item.id} className="border-b border-purple-100">
                                            <td className="py-4">{item.name}</td>
                                            <td>{item.os}</td>
                                            <td>{item.cpu} vCPU</td>
                                            <td>{(item.ram / 1024).toFixed(1)} GB</td>
                                            <td>
                                                <span
                                                    className={`rounded-full px-4 py-1 text-sm ${badgeStyle(item.status)}`}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
