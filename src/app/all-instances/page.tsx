"use client";

import { Home, Server, Activity } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define the interface for your mapped instance data
interface InstanceData {
    id: number;
    name: string;
    os: string;
    cpu: number;
    ram: number;
    status: string;
}

export default function ViewUserInstancePage() {
    const router = useRouter();
    const [instances, setInstances] = useState<InstanceData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadInstances() {
            try {
                setIsLoading(true);
                // Call your real API endpoint
                const res = await fetch("/api/user/instances");

                if (!res.ok) throw new Error("Failed to fetch instances");

                const rawData = await res.json();

                // Map the deep nested Prisma data to flat UI data
                const mappedData = rawData.map((inst: any) => ({
                    id: inst.instanceId,
                    name: inst.request?.instantName || "Unknown Instance",
                    os: inst.request?.template?.osTemplate?.osName || "Unknown OS",
                    cpu: inst.request?.template?.instance?.cpuAmount || 0,
                    ram: inst.request?.template?.instance?.ramAmount || 0,
                    status: capitalize(inst.machineState || "Offline"),
                }));

                setInstances(mappedData);
            } catch (error) {
                console.error("Error loading instances:", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadInstances();
    }, []);

    const capitalize = (s: string) =>
        s ? s.charAt(0).toUpperCase() + s.slice(1) : "";

    const badgeStyle = (status: string) => {
        switch (status.toLowerCase()) {
            case "running":
                return "bg-green-100 text-green-800 border border-green-200";
            case "stopped":
                return "bg-red-100 text-red-800 border border-red-200";
            default:
                return "bg-gray-100 text-gray-800 border border-gray-200";
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f2ff] font-sans text-gray-700">
            {/* NAVBAR */}
            <div className="flex items-center justify-between bg-[#cfc2ff] px-6 py-4 shadow">
                {/* LEFT HOME SECTION */}
                <div
                    className="flex cursor-pointer items-center gap-3 transition hover:opacity-80"
                    onClick={() => router.push("/dashboard")}
                >
                    <Home size={26} className="text-gray-700" />
                    <span className="text-xl font-semibold text-gray-800">Home</span>
                </div>

                {/* Empty div for layout balance since Create button was removed */}
                <div></div>
            </div>

            <div className="mx-auto max-w-7xl p-10">
                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg bg-purple-100 p-2">
                        <Server size={28} className="text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        User Instance List
                    </h2>
                </div>

                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="custom-scrollbar max-h-[70vh] overflow-y-auto">
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                                <div className="mb-2 h-8 w-8 animate-spin rounded-full border-b-2 border-purple-600"></div>
                                <p>Loading your instances...</p>
                            </div>
                        ) : (
                            <table className="w-full border-collapse">
                                <thead className="sticky top-0 z-10 bg-white">
                                    <tr className="border-b border-purple-200 text-left text-sm tracking-wider text-gray-600 uppercase">
                                        <th className="pb-4 pl-4 font-semibold">Instance Name</th>
                                        <th className="pb-4 font-semibold">OS</th>
                                        <th className="pb-4 font-semibold">CPU</th>
                                        <th className="pb-4 font-semibold">RAM</th>
                                        <th className="pb-4 font-semibold">Status</th>
                                        <th className="pb-4 text-center font-semibold">Action</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-purple-50">
                                    {instances.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={6}
                                                className="flex h-48 w-full flex-col items-center justify-center py-12 text-center text-gray-400"
                                            >
                                                <Server size={40} className="mb-2 text-gray-200" />
                                                <p>No active instances found.</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        instances.map((item) => (
                                            <tr
                                                key={item.id}
                                                className="transition duration-150 hover:bg-purple-50"
                                            >
                                                <td className="py-4 pl-4 font-medium text-gray-900">
                                                    {item.name}
                                                </td>
                                                <td className="flex items-center gap-2 py-4 text-gray-600">
                                                    {/* Simple OS Icon Logic */}
                                                    {item.os.toLowerCase().includes("windows")
                                                        ? ""
                                                        : ""}{" "}
                                                    {item.os}
                                                </td>
                                                <td className="text-gray-600">{item.cpu} vCPU</td>
                                                <td className="text-gray-600">
                                                    {(item.ram / 1024).toFixed(1)} GB
                                                </td>

                                                <td>
                                                    <span
                                                        className={`flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${badgeStyle(
                                                            item.status,
                                                        )}`}
                                                    >
                                                        {item.status.toLowerCase() === "running" && (
                                                            <Activity size={12} className="animate-pulse" />
                                                        )}
                                                        {item.status}
                                                    </span>
                                                </td>

                                                <td className="text-center">
                                                    <button
                                                        onClick={() =>
                                                            router.push(`/view-instance/${item.id}`)
                                                        }
                                                        className="rounded-full bg-[#d4c5ff] px-4 py-1.5 text-sm font-medium text-purple-900 shadow-sm transition hover:bg-[#bfb0ff]"
                                                    >
                                                        View Details
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
