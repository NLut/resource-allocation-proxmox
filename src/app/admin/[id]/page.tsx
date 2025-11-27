"use client";

import { Home, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function AdminViewRequest() {
    const params = useParams();
    const router = useRouter();

    // Handle the async params/id safely
    const rawId = params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);

    // 1. Fetch Data from API
    useEffect(() => {
        if (!id) return;

        async function loadRequest() {
            try {
                const res = await fetch(`/api/admin/requests/${id}`);
                if (!res.ok) throw new Error("Request not found");

                const json = await res.json();

                // Map DB structure to UI structure
                setData({
                    instanceName: json.instantName,
                    os: json.template?.osTemplate?.osName || "Unknown",
                    spec: {
                        cpu: `${json.template?.instance?.cpuAmount} vCPU`,
                        ram: `${(json.template?.instance?.ramAmount / 1024).toFixed(1)} GB`,
                        storage: `${json.template?.instance?.storageAmount} GB`,
                    },
                    startDate: new Date(json.requestDate).toLocaleDateString(),
                    endDate: json.endDate
                        ? new Date(json.endDate).toLocaleDateString()
                        : "-",
                });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        loadRequest();
    }, [id]);

    // 2. Handle API Actions (Approve/Reject)
    const handleUpdateStatus = async (status: "approved" | "rejected") => {
        if (processing) return;
        if (!confirm(`Are you sure you want to ${status} this request?`)) return;

        setProcessing(true);
        try {
            const res = await fetch(`/api/admin/requests/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }), // Send status to API
            });

            if (!res.ok) throw new Error("Failed to update");

            alert(`Request ${status} successfully!`);
            router.push("/admin/requests"); // Redirect back to list
            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setProcessing(false);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f4f2ff]">
                <p className="animate-pulse text-xl text-gray-600">
                    Loading request details...
                </p>
            </div>
        );
    }

    if (!data) return <div className="p-10 text-center">Request not found</div>;

    return (
        <div className="min-h-screen bg-[#f4f2ff] font-sans text-gray-700">
            {/* NAVBAR */}
            <div className="flex items-center gap-3 bg-[#cfc2ff] px-6 py-4 shadow">
                <Home
                    size={26}
                    className="cursor-pointer text-gray-700"
                    onClick={() => router.push("/admin/requests")}
                />
                <span
                    onClick={() => router.push("/admin/requests")}
                    className="cursor-pointer text-xl font-semibold text-gray-800"
                >
                    Admin Dashboard
                </span>
            </div>

            <div className="px-8 py-10 md:px-20">
                <button
                    onClick={() => router.back()}
                    className="mb-6 flex items-center gap-2 text-gray-500 transition hover:text-purple-700"
                >
                    <ArrowLeft size={20} /> Back
                </button>

                <h2 className="mb-10 text-4xl font-semibold text-gray-900">
                    View Instance Request
                </h2>

                <div className="mx-auto max-w-5xl rounded-3xl bg-[#e8defc] p-10 shadow-xl">
                    {/* OS */}
                    <p className="mb-3 text-2xl font-semibold text-gray-900">
                        Operating System
                    </p>
                    <div className="mb-10 flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-lg text-black shadow">
                        {data.os.toLowerCase().includes("windows") ? "🪟" : "🐧"} {data.os}
                    </div>

                    {/* Specs Table */}
                    <p className="mb-3 text-2xl font-semibold text-gray-900">
                        Specifications
                    </p>
                    <div className="mb-10 rounded-2xl bg-white p-8 shadow">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-purple-300 text-left text-gray-600">
                                    <th className="pb-3 font-semibold">Instance Name</th>
                                    <th className="pb-3 font-semibold">CPU</th>
                                    <th className="pb-3 font-semibold">RAM</th>
                                    <th className="pb-3 text-center font-semibold">Schedule</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                <tr className="border-b border-purple-100">
                                    <td className="py-4 font-medium text-black">
                                        {data.instanceName}
                                    </td>
                                    <td className="py-4">{data.spec.cpu}</td>
                                    <td className="py-4">{data.spec.ram}</td>
                                    <td className="py-4 text-center">
                                        <div className="flex flex-col items-center text-sm leading-tight">
                                            <span className="text-gray-500">Start:</span>
                                            <span className="font-semibold text-gray-800">
                                                {data.startDate}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4"></td>
                                    <td className="py-4"></td>
                                    <td className="py-4 text-sm text-gray-500">
                                        {data.spec.storage} Storage
                                    </td>
                                    <td className="py-4 text-center">
                                        <div className="flex flex-col items-center text-sm leading-tight">
                                            <span className="text-gray-500">End:</span>
                                            <span className="font-semibold text-gray-800">
                                                {data.endDate}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Actions */}
                    <div className="mt-10 flex justify-end gap-6">
                        <button
                            onClick={() => handleUpdateStatus("rejected")}
                            disabled={processing}
                            className="rounded-full bg-red-400 px-10 py-3 text-lg text-white shadow transition hover:bg-red-500 disabled:opacity-50"
                        >
                            {processing ? "..." : "Reject"}
                        </button>

                        <button
                            onClick={() => handleUpdateStatus("approved")}
                            disabled={processing}
                            className="rounded-full bg-[#7d5fff] px-10 py-3 text-lg text-white shadow transition hover:bg-[#6d52f7] disabled:opacity-50"
                        >
                            {processing ? "Processing..." : "Approve"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
