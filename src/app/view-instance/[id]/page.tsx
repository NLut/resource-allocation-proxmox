"use client";

import { Home, Eye, EyeOff, Copy, Server, Activity } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewInstancePage() {
    const params = useParams();
    const router = useRouter();

    // Handle ID parsing safely
    const rawId = params.id;
    const instanceId = Array.isArray(rawId) ? rawId[0] : rawId;

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [toggling, setToggling] = useState(false);

    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [copyLabel, setCopyLabel] = useState("Copy");

    // 1. Fetch Data from API
    useEffect(() => {
        if (!instanceId) return;

        async function load() {
            try {
                const res = await fetch(`/api/user/instances/${instanceId}`);

                if (!res.ok) {
                    if (res.status === 404) alert("Instance not found");
                    router.push("/dashboard");
                    return;
                }

                const raw = await res.json();

                // Map DB structure to UI structure
                setData({
                    id: raw.instanceId,
                    name: raw.request?.instantName || "Unknown",
                    os: raw.request?.template?.osTemplate?.osName || "Unknown OS",
                    cpu: `${raw.request?.template?.instance?.cpuAmount} vCPU`,
                    ram: `${(raw.request?.template?.instance?.ramAmount / 1024).toFixed(1)} GB`,
                    storage: `${raw.request?.template?.instance?.storageAmount} GB`,
                    username: raw.username,
                    password: raw.password,
                    // Map "Running"/"Stopped" to "On"/"Off" for UI logic
                    status: raw.machineState === "Running" ? "On" : "Off",
                });
            } catch (e) {
                console.error("Error:", e);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [instanceId, router]);

    // 2. Toggle Status API Call
    const toggleStatus = async () => {
        if (toggling || !data) return;
        setToggling(true);

        const newStatusUI = data.status === "On" ? "Off" : "On";
        const newStatusDB = data.status === "On" ? "Stopped" : "Running"; // Map back to DB value

        try {
            const res = await fetch(`/api/user/instances/${instanceId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatusDB }),
            });

            if (!res.ok) throw new Error("Failed to update");

            // Update UI optimistically
            setData((prev: any) => ({ ...prev, status: newStatusUI }));
        } catch (error) {
            alert("Failed to toggle status");
            console.error(error);
        } finally {
            setToggling(false);
        }
    };

    const copyUsername = async () => {
        if (!data?.username) return;
        await navigator.clipboard.writeText(data.username);
        setCopyLabel("Copied!");
        setTimeout(() => setCopyLabel("Copy"), 1500);
    };

    if (loading) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#f4f2ff] text-gray-500">
                <div className="mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-600"></div>
                <p className="text-xl">Loading Instance #{instanceId}...</p>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="min-h-screen bg-[#f4f2ff] font-sans">
            {/* NAVBAR */}
            <div className="flex w-full items-center gap-3 bg-[#cfc2ff] px-6 py-4 shadow">
                <div
                    onClick={() => router.push("/dashboard")}
                    className="flex cursor-pointer items-center gap-2 transition hover:opacity-80"
                >
                    <Home size={26} className="text-gray-700" />
                    <span className="text-xl font-semibold text-gray-800">Home</span>
                </div>
            </div>

            {/* CONTENT */}
            <div className="px-4 pt-12 pb-10 md:px-16">
                <div className="mb-10 flex items-center gap-4">
                    <div className="rounded-xl bg-purple-100 p-3">
                        <Server size={32} className="text-purple-600" />
                    </div>
                    <h1 className="text-4xl font-semibold text-gray-900">
                        View Instance #{instanceId}
                    </h1>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-3xl bg-[#e8defc] px-8 py-12 shadow-xl md:px-12">
                    {/* OS */}
                    <p className="mb-2 text-2xl font-semibold text-black">
                        Operating System
                    </p>
                    <div className="mb-10 flex w-full items-center gap-3 rounded-xl bg-white px-6 py-4 text-lg text-black shadow-md">
                        {data.os.toLowerCase().includes("windows") ? "🪟" : "🐧"} {data.os}
                    </div>

                    {/* SPEC TABLE */}
                    <p className="mb-3 text-2xl font-semibold text-black">
                        Specifications
                    </p>

                    <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-md">
                        <table className="w-full text-lg text-gray-700">
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="w-1/3 py-4 font-semibold">Instance Name</td>
                                    <td className="py-4">{data.name}</td>
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="py-4 font-semibold">CPU</td>
                                    <td className="py-4">{data.cpu}</td>
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="py-4 font-semibold">RAM</td>
                                    <td className="py-4">{data.ram}</td>
                                </tr>

                                <tr className="border-b border-gray-100">
                                    <td className="py-4 font-semibold">Storage</td>
                                    <td className="py-4">{data.storage}</td>
                                </tr>

                                <tr>
                                    <td className="py-4 font-semibold">Status</td>
                                    <td className="py-4">
                                        <button
                                            onClick={toggleStatus}
                                            disabled={toggling}
                                            className={`flex items-center gap-2 rounded-full px-8 py-2 font-medium text-white shadow-sm transition ${data.status === "On"
                                                ? "bg-green-500 hover:bg-green-600"
                                                : "bg-gray-500 hover:bg-gray-600"
                                                } ${toggling ? "cursor-not-allowed opacity-70" : ""} `}
                                        >
                                            {toggling ? (
                                                "Updating..."
                                            ) : data.status === "On" ? (
                                                <>
                                                    <Activity size={18} className="animate-pulse" />{" "}
                                                    Running (Turn Off)
                                                </>
                                            ) : (
                                                "Stopped (Turn On)"
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* VIEW PASSWORD */}
                    <div className="mt-10 flex justify-end">
                        <button
                            onClick={() => setShowModal(true)}
                            className="transform rounded-full bg-[#7d5fff] px-10 py-3 text-xl font-medium text-white shadow-lg transition hover:scale-105 hover:bg-[#6d52f7]"
                        >
                            View Password
                        </button>
                    </div>
                </div>
            </div>

            {/* MODAL POPUP */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
                    <div className="animate-in fade-in zoom-in w-full max-w-[430px] rounded-3xl bg-white p-8 shadow-2xl duration-200">
                        <h2 className="mb-8 text-center text-3xl font-semibold text-black">
                            Access Credentials
                        </h2>

                        {/* Instance */}
                        <div className="mb-6">
                            <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                                Instance
                            </p>
                            <div className="rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 font-medium text-black">
                                {data.name}
                            </div>
                        </div>

                        {/* Username */}
                        <div className="mb-6">
                            <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                                Username
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 font-medium text-black">
                                    {data.username}
                                </div>
                                <button
                                    onClick={copyUsername}
                                    className="flex items-center gap-1 rounded-xl bg-[#7d5fff] px-4 py-3 text-white shadow-sm transition hover:bg-[#6d52f7]"
                                >
                                    <Copy size={18} />
                                    <span className="text-sm font-medium">{copyLabel}</span>
                                </button>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mb-8">
                            <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                                Password
                            </p>
                            <div className="flex items-center rounded-xl border border-gray-200 bg-gray-100 px-4 py-3">
                                <span className="flex-1 font-mono font-medium text-black">
                                    {showPassword ? data.password : "••••••••••••"}
                                </span>

                                <button
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="rounded-full p-2 text-gray-600 transition hover:bg-gray-200"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="w-full rounded-full bg-[#7d5fff] py-3 text-lg font-medium text-white shadow-md transition hover:bg-[#6d52f7]"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
