"use client";

import { Home } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import { 
  getRequestById, 
  updateRequestStatus 
} from "../../../mock-data/requestService";

import { addUserInstance } from "../../../mock-data/instanceService";

export default function AdminViewRequest() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    console.log("🟦 URL PARAM id =", id);

    const result = getRequestById(id);
    console.log("🟦 getRequestById() =", result);

    setData(result);
  }, [id]);

  if (!data) {
    console.log("❌ data is null — request not found");
    return (
      <div className="min-h-screen bg-[#f4f2ff] flex items-center justify-center">
        <p className="text-gray-600 text-xl">Loading...</p>
      </div>
    );
  }

  // =====================
  // APPROVE
  // =====================
  const handleApprove = () => {
    console.log("🟧 Approve clicked");

    // ได้ request หลังอัปเดตจริง
    const updatedReq = updateRequestStatus(id, "Approved");
    console.log("🟧 updatedReq returned =", updatedReq);

    if (!updatedReq) {
      console.log("❌ updatedReq is NULL → updateRequestStatus failed");
    }

    if (updatedReq) {
      const inst = addUserInstance(updatedReq);
      console.log("🟩 addUserInstance RESULT =", inst);
    }

    // เช็ก localStorage หลังสร้าง instance
    const check = localStorage.getItem("userInstances");
    console.log("🟦 localStorage.userInstances =", check);

    router.push("/admin");
    router.refresh();
  };

  // =====================
  // REJECT
  // =====================
  const handleReject = () => {
    console.log("🟥 Reject clicked");

    const updatedReq = updateRequestStatus(id, "Rejected");
    console.log("🟥 updatedReq returned =", updatedReq);

    router.push("/admin");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#f4f2ff] text-gray-700">

      {/* NAVBAR */}
      <div className="bg-[#cfc2ff] px-6 py-4 flex items-center gap-3 shadow">
        <Home
          size={26}
          className="text-gray-700 cursor-pointer"
          onClick={() => router.push("/admin")}
        />
        <span 
          onClick={() => router.push("/admin")}
          className="text-xl font-semibold text-gray-800 cursor-pointer"
        >
          Home
        </span>
      </div>

      <div className="px-20 py-10">
        <h2 className="text-4xl font-semibold text-gray-900 mb-10">
          View Instance Request
        </h2>

        <div className="bg-[#e8defc] p-10 rounded-3xl shadow-xl max-w-5xl mx-auto">

          <p className="text-2xl font-semibold text-gray-900 mb-3">
            Operation System
          </p>

          <div className="bg-white px-6 py-4 rounded-xl shadow text-lg mb-10">
            {data.os}
          </div>

          <p className="text-2xl font-semibold text-gray-900 mb-3">Spec:</p>

          <div className="bg-white rounded-2xl shadow p-8">

          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-600 border-b border-purple-300">
                <th className="pb-3">Instance Name</th>
                <th className="pb-3">Operation System</th>
                <th className="pb-3">Spec</th>
                <th className="pb-3 text-center">Date</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-purple-200">
                <td className="py-4">{data.instanceName || data.name}</td>
                <td className="py-4">{data.os}</td>
                <td className="py-4">{data.spec?.cpu}</td>

                <td className="py-4 text-center">
                  <div className="flex flex-col items-center leading-tight">
                    <span className="font-semibold text-gray-700">Start:</span>
                    <span>{data.startDate || "-"}</span>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-purple-200">
                <td className="py-4"></td>
                <td className="py-4"></td>
                <td className="py-4">{data.spec?.ram}</td>

                <td className="py-4 text-center">
                  <div className="flex flex-col items-center leading-tight">
                    <span className="font-semibold text-gray-700">End:</span>
                    <span>{data.endDate || "-"}</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="py-4"></td>
                <td className="py-4"></td>
                <td className="py-4">{data.spec?.storage ?? "60 GB Storage"}</td>
                <td className="py-4"></td>
              </tr>

            </tbody>
          </table>

          </div>

          <div className="flex justify-end gap-6 mt-10">
            <button
              onClick={handleReject}
              className="px-10 py-3 bg-red-400 hover:bg-red-500 text-white text-lg rounded-full shadow"
            >
              Reject
            </button>

            <button
              onClick={handleApprove}
              className="px-10 py-3 bg-[#7d5fff] hover:bg-[#6d52f7] text-white text-lg rounded-full shadow"
            >
              Approve
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
