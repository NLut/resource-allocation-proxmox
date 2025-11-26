"use client";

import { Home, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Define Interfaces for API Data
interface OsTemplate {
  osId: number;
  osName: string;
}

interface InstanceTemplate {
  instanceId: number;
  name: string;
  cpuAmount: number;
  ramAmount: number;
  storageAmount: number;
}

export default function CreateRequestPage() {
  const router = useRouter();

  // --- Options State ---
  const [osOptions, setOsOptions] = useState<OsTemplate[]>([]);
  const [specOptions, setSpecOptions] = useState<InstanceTemplate[]>([]);

  // --- Form State ---
  const [instanceName, setInstanceName] = useState("");
  const [selectedOsId, setSelectedOsId] = useState<number | "">("");
  const [selectedSpecId, setSelectedSpecId] = useState<number | "">("");
  const [enableGPU, setEnableGPU] = useState(false);
  const [note, setNote] = useState(""); 
  const [loading, setLoading] = useState(false);

  // --- 1. Load Templates on Mount ---
  useEffect(() => {
    async function loadTemplates() {
      try {
        const res = await fetch("/api/templates");
        if (!res.ok) throw new Error("Failed to load templates");
        
        const data = await res.json();
        
        setOsOptions(data.osTemplates);
        setSpecOptions(data.instanceTemplates);

        // Set defaults if available
        if (data.osTemplates.length > 0) setSelectedOsId(data.osTemplates[0].osId);
        if (data.instanceTemplates.length > 0) setSelectedSpecId(data.instanceTemplates[0].instanceId);

      } catch (error) {
        console.error("Error loading templates:", error);
        // Optional: Set some UI error state here
      }
    }
    loadTemplates();
  }, []);


  // --- 2. Handle Create ---
  const handleCreate = async () => {
    if (!instanceName || !selectedOsId || !selectedSpecId) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      // Prepare payload for API
      const payload = {
        instanceTemplateId: Number(selectedSpecId),
        osTemplateId: Number(selectedOsId),
        instantName: instanceName,
        note: note + (enableGPU ? " [GPU Requested]" : "") 
      };

      // ⭐ FIX: Changed URL to match your file location (api/requests/create/route.ts)
      const res = await fetch("/api/requests/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData || "Failed to create request");
      }

      // Success
      router.push("/dashboard"); 

    } catch (error) {
      console.error("Creation failed:", error);
      alert("Failed to create request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f2ff] text-gray-700 font-sans">

      {/* NAVBAR */}
      <div className="w-full bg-[#cfc2ff] px-8 py-4 flex items-center gap-3 shadow">
        <div 
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
        >
          <Home size={26} className="text-gray-700" />
          <span className="text-xl font-semibold text-gray-800">Home</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-4 md:px-16 pt-12 pb-10">

        <h1 className="text-4xl font-semibold text-gray-900 mb-10 text-center md:text-left">
          Create New Request
        </h1>

        <div className="bg-[#e8defc] px-8 md:px-12 py-12 rounded-3xl shadow-xl w-full max-w-4xl mx-auto">

          {/* INSTANCE NAME */}
          <div className="mb-8">
            <label className="block text-2xl font-semibold text-gray-900 mb-3">
              Instance Name
            </label>
            <input
              type="text"
              value={instanceName}
              onChange={(e) => setInstanceName(e.target.value)}
              placeholder="e.g. My Senior Project Server"
              className="w-full bg-white text-gray-700 px-6 py-4 rounded-xl shadow-md text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* OS SELECTION */}
          <div className="mb-8 relative">
            <label className="block text-2xl font-semibold text-gray-900 mb-3">
              Operating System
            </label>
            <div className="relative">
              <select
                value={selectedOsId}
                onChange={(e) => setSelectedOsId(Number(e.target.value))}
                className="w-full bg-white text-gray-700 px-6 py-4 rounded-xl shadow-md appearance-none text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {osOptions.map((os) => (
                  <option key={os.osId} value={os.osId}>
                    {os.osName}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* SPEC SELECTION */}
          <div className="mb-8 relative">
            <label className="block text-2xl font-semibold text-gray-900 mb-3">
              Hardware Specification
            </label>
            <div className="relative">
              <select
                value={selectedSpecId}
                onChange={(e) => setSelectedSpecId(Number(e.target.value))}
                className="w-full bg-white text-gray-700 px-6 py-4 rounded-xl shadow-md appearance-none text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {specOptions.map((spec) => (
                  <option key={spec.instanceId} value={spec.instanceId}>
                    {spec.name} — {spec.cpuAmount} vCPU — {(spec.ramAmount / 1024).toFixed(0)}GB RAM — {spec.storageAmount}GB SSD
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* GPU CHECKBOX */}
          <div className="flex items-center gap-3 mb-8">
            <input
              type="checkbox"
              id="gpuCheck"
              checked={enableGPU}
              onChange={() => setEnableGPU(!enableGPU)}
              className="w-6 h-6 accent-purple-600 cursor-pointer"
            />
            <label htmlFor="gpuCheck" className="text-xl text-gray-900 cursor-pointer select-none">
              Request GPU Allocation
            </label>
          </div>

           {/* NOTE */}
           <div className="mb-10">
            <label className="block text-2xl font-semibold text-gray-900 mb-3">
              Purpose / Note
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Briefly describe what this instance is for..."
              className="w-full bg-white text-gray-700 px-6 py-4 rounded-xl shadow-md text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 h-32 resize-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex justify-end">
            <button
              onClick={handleCreate}
              disabled={loading}
              className={`px-14 py-4 rounded-full text-white text-xl font-medium shadow-lg transition flex items-center gap-2
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#7d5fff] hover:bg-[#6d52f7] hover:scale-105"}`}
            >
              {loading ? (
                <>Creating...</>
              ) : (
                "Submit Request"
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
