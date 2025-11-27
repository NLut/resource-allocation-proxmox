"use client";

import { Home, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define interface for mapped data
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
        async function loadRequests() {
            try {
                setIsLoading(true);
                // Fetch real pending requests from the admin API
                const res = await fetch("/api/admin/requests");

                if (!res.ok) throw new Error("Failed to fetch requests");

                const data = await res.json();

                // Map Prisma nested data to flat UI structure
                const mapped = data.map((item: any) => ({
                    id: item.requestId,
                    instanceName: item.instantName, // User's custom name
                    os: item.template?.osTemplate?.osName || "Unknown",
                    cpu: item.template?.instance?.cpuAmount || 0,
                    ram: item.template?.instance?.ramAmount || 0,
                }));

                setRequests(mapped);
            } catch (error) {
                console.error("Admin load error:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadRequests();
    }, []);

    return (
        <div className="min-h-screen bg-[#f4f2ff] font-sans text-gray-700">
            {/* NAVBAR */}
            <div className="flex items-center gap-3 bg-[#cfc2ff] px-6 py-4 shadow">
                <Home size={26} className="text-gray-700" />
                <span className="text-xl font-semibold text-gray-800">
                    Admin Dashboard
                </span>
            </div>

            <div className="p-10">
                {/* TITLE */}
                <h2 className="mb-6 text-3xl font-semibold text-gray-800">
                    Pending Request List
                </h2>

                {/* TABLE BOX */}
                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="custom-scrollbar max-h-96 overflow-y-auto">
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center p-8 text-gray-500">
                                <Loader2
                                    className="mb-2 animate-spin text-purple-600"
                                    size={32}
                                />
                                <p>Loading pending requests...</p>
                            </div>
                        ) : (
                            <table className="w-full border-collapse">
                                <thead className="sticky top-0 z-10 bg-white">
                                    <tr className="border-b border-purple-200 text-left text-sm tracking-wider text-gray-600 uppercase">
                                        <th className="pb-4 pl-4 font-semibold">Instance Name</th>
                                        <th className="pb-4 font-semibold">OS</th>
                                        <th className="pb-4 font-semibold">CPU</th>
                                        <th className="pb-4 font-semibold">RAM</th>
                                        <th className="pb-4 text-center font-semibold">Action</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-purple-50">
                                    {requests.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={5}
                                                className="py-12 text-center text-gray-400"
                                            >
                                                No pending requests found.
                                            </td>
                                        </tr>
                                    ) : (
                                        requests.map((item) => (
                                            <tr
                                                key={item.id}
                                                className="transition duration-150 hover:bg-purple-50"
                                            >
                                                <td className="py-4 pl-4 font-medium text-gray-900">
                                                    {item.instanceName}
                                                </td>
                                                <td className="text-gray-600">{item.os}</td>
                                                <td className="text-gray-600">{item.cpu} vCPU</td>
                                                <td className="text-gray-600">
                                                    {(item.ram / 1024).toFixed(0)} GB
                                                </td>
                                                <td className="text-center">
                                                    <button
                                                        onClick={() => router.push(`/admin/${item.id}`)}
                                                        className="rounded-full bg-[#d4c5ff] px-5 py-1.5 text-sm font-medium text-purple-900 shadow-sm transition hover:bg-[#bfb0ff]"
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
