// ============================
// Request Instances (LocalStorage)
// ============================

// ดึงรายการ Request
export function getRequestInstances() {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem("mockRequests");
  return saved ? JSON.parse(saved) : [];
}

// ดึง Request ตาม ID
export function getRequestById(id: string) {
  if (typeof window === "undefined") return null;

  const list = getRequestInstances();
  return list.find((item: any) => item.id.toString() === id.toString()) || null;
}

// ============================
// สร้าง Request ใหม่
// ============================
export function saveNewRequest(payload: any) {
  const list = getRequestInstances();

  const newReq = {
    id: Date.now(),
    status: "Pending",
    date: new Date().toISOString().slice(0, 10),

    // ⭐ รองรับชื่อ Instance
    instanceName: payload.instanceName || payload.name || "-",

    ...payload,
  };

  list.push(newReq);
  localStorage.setItem("mockRequests", JSON.stringify(list));

  return newReq.id;
}

// ============================
// อัปเดตสถานะของ request (Approve / Reject)
// ============================
// ⭐ แก้ให้ return request ที่ถูกอัปเดต (สำคัญมาก)
export function updateRequestStatus(id: string, status: string) {
  const list = getRequestInstances();

  let updatedReq: any = null;

  const updatedList = list.map((req: any) => {
    if (req.id.toString() === id.toString()) {
      updatedReq = { ...req, status };
      return updatedReq;
    }
    return req;
  });

  localStorage.setItem("mockRequests", JSON.stringify(updatedList));

  return updatedReq;  // ⭐ ต้อง return
}

// ============================
// อัปเดตข้อมูล Request (ใช้ในหน้า Edit)
// ============================
export function updateRequest(id: string, newData: any) {
  const list = getRequestInstances();

  const updatedList = list.map((req: any) =>
    req.id.toString() === id.toString()
      ? {
          ...req,
          ...newData,
          instanceName:
            newData.instanceName ||
            newData.name ||
            req.instanceName ||
            "-",
        }
      : req
  );

  localStorage.setItem("mockRequests", JSON.stringify(updatedList));
}

// ============================
// User Instances (Approve แล้วเท่านั้น)
// ============================

export function getUserInstances() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("userInstances") || "[]");
}

// เพิ่ม Instance เมื่อ Admin กด Approve
export function addUserInstance(req: any) {
  if (!req) return; // ⭐ ป้องกัน crash ถ้า req undefined

  const list = getUserInstances();

  const newInstance = {
    id: Date.now(),
    name: req.instanceName || req.name || "Unnamed-Instance",
    os: req.os,
    cpu: req.spec?.cpu,
    ram: req.spec?.ram,
    storage: req.spec?.storage,
    status: "On",
  };

  list.push(newInstance);

  localStorage.setItem("userInstances", JSON.stringify(list));

  return newInstance;  // ⭐ optional แต่ดีต่อการ debug
}
