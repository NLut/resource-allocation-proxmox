"use client";

import { Home, ChevronDown, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateRequestPage() {
  const router = useRouter();

  // Options
  const [osOptions, setOsOptions] = useState<any[]>([]);
  const [specOptions, setSpecOptions] = useState<any[]>([]);

  // Inputs
  const [instanceName, setInstanceName] = useState("");
  const [selectedOS, setSelectedOS] = useState<any>(null);
  const [selectedSpec, setSelectedSpec] = useState<any>(null);
  const [enableGPU, setEnableGPU] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [loading, setLoading] = useState(false);

  // Load from API
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/templates");
        const data = await res.json();

        // =============== OS ===============
        const osList = data.osTemplates.map((item: any) => ({
          id: Number(item.id ?? item.id_os ?? item.osId ?? item.osTemplateId),
          name: item.osName,
        }));

        setOsOptions(osList);
        setSelectedOS(osList[0] ?? null);

        // =============== SPEC =================
        const specList = data.instanceTemplates.map((item: any) => ({
          id: Number(item.id ?? item.id_instance ?? item.instanceId ?? item.instanceTemplateId),
          name: item.name,
          cpu: item.cpu,
          ram: item.ram,
          storage: item.storage,
        }));

        setSpecOptions(specList);
        setSelectedSpec(specList[0] ?? null);

      } catch (error) {
        console.error("Error loading templates:", error);
      }
    }

    loadData();
  }, []);

  // Submit
  const handleCreate = async () => {
    setLoading(true);

    try {
      const payload = {
        instanceTemplateId: Number(selectedSpec.id),
        osTemplateId: Number(selectedOS.id),
        instantName: instanceName,
        note: "",
        startDate,
        endDate,
      };

      const res = await fetch("/api/requests/create", {   // ⬅ แก้ Path ให้ตรง backend
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("Create request failed:", await res.text());
        setLoading(false);
        return;
      }

      router.push("/dashboard");

    } catch (err) {
      console.error("Error creating request:", err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-[#f4f2ff]">

      {/* NAVBAR */}
      <div className="w-full bg-[#cfc2ff] px-8 py-4 flex items-center gap-3 shadow">
        <Home size={26} className="text-gray-700" />
        <span
          onClick={() => router.push("/dashboard")}
          className="text-xl cursor-pointer font-semibold text-gray-800"
        >
          Home
        </span>
      </div>

      <div className="px-16 pt-12 pb-10">
        <h1 className="text-4xl font-semibold text-gray-900 mb-10">
          Create Request
        </h1>

        <div className="bg-[#e8defc] px-12 py-12 rounded-3xl shadow-xl w-full max-w-5xl mx-auto">

          {/* Instance Name */}
          <p className="text-2xl font-semibold text-gray-900 mb-3">
            Instance Name
          </p>

          <input
            type="text"
            value={instanceName}
            onChange={(e) => setInstanceName(e.target.value)}
            placeholder="Enter instance name..."
            className="w-full bg-white text-gray-700 px-6 py-4 rounded-xl shadow-md mb-10 text-lg"
          />

          {/* OS */}
          <p className="text-2xl font-semibold text-gray-900 mb-3">
            Operation System
          </p>

          <div className="relative mb-10">
            <select
              value={selectedOS?.id ?? ""}
              onChange={(e) =>
                setSelectedOS(
                  osOptions.find((os) => os.id === Number(e.target.value))
                )
              }
              className="w-full bg-white text-gray-700 px-6 py-4 rounded-xl shadow-md appearance-none text-lg"
            >
              {osOptions.map((os) => (
                <option key={os.id} value={os.id}>
                  {os.name}
                </option>
              ))}
            </select>

            <ChevronDown className="absolute right-5 top-4 text-gray-500" />
          </div>

          {/* SPEC */}
          <p className="text-2xl font-semibold text-gray-900 mb-3">Spec:</p>

          <div className="relative mb-10">
            <select
              value={selectedSpec?.id ?? ""}
              onChange={(e) =>
                setSelectedSpec(
                  specOptions.find((s) => s.id === Number(e.target.value))
                )
              }
              className="w-full bg-white text-gray-700 px-6 py-4 rounded-xl shadow-md appearance-none text-lg"
            >
              {specOptions.map((spec) => (
                <option key={spec.id} value={spec.id}>
                  {spec.name} — {spec.cpu} — {spec.ram} — {spec.storage}
                </option>
              ))}
            </select>

            <ChevronDown className="absolute right-5 top-4 text-gray-500" />
          </div>

          {/* GPU */}
          <div className="flex items-center gap-3 mb-10">
            <input
              type="checkbox"
              checked={enableGPU}
              onChange={() => setEnableGPU(!enableGPU)}
              className="w-6 h-6"
            />
            <label className="text-xl text-gray-900">Enable GPU</label>
          </div>

          {/* DATES */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="relative">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-white px-6 py-4 rounded-xl shadow-md text-gray-700 text-lg"
              />
              <Calendar className="absolute right-5 top-4 text-gray-500" />
            </div>

            <div className="relative">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-white px-6 py-4 rounded-xl shadow-md text-gray-700 text-lg"
              />
              <Calendar className="absolute right-5 top-4 text-gray-500" />
            </div>
          </div>

          {/* SUBMIT */}
          <div className="flex justify-end">
            <button
              onClick={handleCreate}
              disabled={loading}
              className={`px-14 py-4 rounded-full text-white text-xl font-medium shadow-lg transition 
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#7d5fff] hover:bg-[#6d52f7]"}`}
            >
              {loading ? "Creating..." : "Create"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
