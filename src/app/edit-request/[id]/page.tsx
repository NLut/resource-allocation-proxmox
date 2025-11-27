"use client";

import { useEffect, useState } from "react";
import { Home, ChevronDown, Calendar } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

export default function EditRequestPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const requestId = params.id;

  const [osOptions, setOsOptions] = useState<any[]>([]);
  const [specOptions, setSpecOptions] = useState<any[]>([]);

  const [instanceName, setInstanceName] = useState("");
  const [selectedOS, setSelectedOS] = useState<any>(null);
  const [selectedSpec, setSelectedSpec] = useState<any>(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        // ========== 1) โหลด template ==========
        const templateRes = await fetch("/api/templates");
        const templateData = await templateRes.json();

        const osList = templateData.osTemplates.map((item: any) => ({
          id: item.osId ?? item.id,
          name: item.osName,
        }));

        const specList = templateData.instanceTemplates.map((item: any) => ({
          id: item.instanceId ?? item.id,
          name: item.name,
          cpu: item.cpu,
          ram: item.ram,
          storage: item.storage,
        }));

        setOsOptions(osList);
        setSpecOptions(specList);

        // ========== 2) โหลด request ==========
        const reqRes = await fetch(`/api/requests/${requestId}`);   // ⭐ FIXED URL
        const req = await reqRes.json();

        setInstanceName(req.instantName);
        setStartDate(req.requestDate.split("T")[0]);
        setEndDate(req.endDate?.split("T")[0] || "");

        // Auto-fill OS
        const foundOS = osList.find(
          (o: any) => o.id === req.template?.osTemplate?.osId
        );
        setSelectedOS(foundOS || osList[0]);

        // Auto-fill SPEC
        const foundSpec = specList.find(
          (s: any) => s.id === req.template?.instance?.instanceId
        );
        setSelectedSpec(foundSpec || specList[0]);
      } catch (error) {
        console.error("Load edit error:", error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [requestId]);

  if (loading) return <div className="p-10 text-xl">Loading...</div>;

  // ========== Save ==========
  const handleSave = async () => {
    const payload = {
      instanceName,
      osId: selectedOS.id,
      instanceId: selectedSpec.id,
      startDate,
      endDate,
    };

    await fetch(`/api/requests/${requestId}`, {  // ⭐ FIXED URL
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#f4f2ff]">
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
          Edit Request #{requestId}
        </h1>

        <div className="bg-[#e8defc] px-12 py-12 rounded-3xl shadow-xl w-full max-w-5xl mx-auto">
          {/* Name */}
          <p className="text-2xl font-semibold text-gray-900 mb-3">Instance Name</p>
          <input
            className="w-full bg-white px-6 py-4 rounded-xl shadow-md mb-10 text-lg"
            value={instanceName}
            onChange={(e) => setInstanceName(e.target.value)}
          />

          {/* OS */}
          <p className="text-2xl font-semibold text-gray-900 mb-3">Operation System</p>
          <div className="relative mb-10">
            <select
              value={selectedOS?.id}
              onChange={(e) =>
                setSelectedOS(osOptions.find((o) => o.id === Number(e.target.value)))
              }
              className="w-full bg-white px-6 py-4 rounded-xl shadow-md text-lg"
            >
              {osOptions.map((os, i) => (
                <option key={os.id ?? i} value={os.id}>
                  {os.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-5 top-4 text-gray-500" />
          </div>

          {/* SPEC */}
          <p className="text-2xl font-semibold text-gray-900 mb-3">Spec</p>
          <div className="relative mb-10">
            <select
              value={selectedSpec?.id}
              onChange={(e) =>
                setSelectedSpec(
                  specOptions.find((s) => s.id === Number(e.target.value))
                )
              }
              className="w-full bg-white px-6 py-4 rounded-xl shadow-md text-lg"
            >
              {specOptions.map((spec, i) => (
                <option key={spec.id ?? i} value={spec.id}>
                  {spec.name} — {spec.cpu} CPU — {spec.ram} RAM — {spec.storage} GB
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-5 top-4 text-gray-500" />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-6 py-4 bg-white rounded-xl shadow-md text-lg"
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="px-6 py-4 bg-white rounded-xl shadow-md text-lg"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="px-14 py-4 bg-[#7d5fff] text-white rounded-full text-xl shadow-lg"
            >
              Save Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
