// ============================
// Instance Services
// ============================

// ดึง instance ทั้งหมด
export function getUserInstances() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("userInstances") || "[]");
}

// เพิ่ม Instance เมื่อ Admin กด Approve
export function addUserInstance(req: any) {
  if (!req) return null; // ⭐ ป้องกัน crash ถ้า req undefined

  const list = getUserInstances();

  // สร้าง username auto
  const newUsername = "demo" + (list.length + 1);
  const newPassword = generateRandomPassword(8);

  const newInstance = {
    id: Date.now(),

    // ⭐ รองรับ instanceName จาก requestService
    name: req.instanceName || req.name || "Unnamed-Instance",

    os: req.os,
    cpu: req.spec?.cpu || req.cpu,
    ram: req.spec?.ram || req.ram,
    storage: req.spec?.storage || req.storage,

    status: "On",

    username: newUsername,
    password: newPassword,

    startDate: req.startDate,
    endDate: req.endDate,
  };

  list.push(newInstance);
  localStorage.setItem("userInstances", JSON.stringify(list));

  return newInstance; // ⭐ ดีต่อการ debug และต่อยอด
}

// อัปเดตสถานะของ instance (ON/OFF)
export function updateInstanceStatus(id: number, status: string) {
  const list = getUserInstances();

  const updated = list.map((i: any) =>
    i.id.toString() === id.toString() ? { ...i, status } : i
  );

  localStorage.setItem("userInstances", JSON.stringify(updated));
}

// ดึง instance ตาม ID
export function getInstanceById(id: string) {
  if (typeof window === "undefined") return null;

  const list = getUserInstances();
  return list.find((item: any) => item.id.toString() === id.toString()) || null;
}

// สุ่มรหัสผ่าน
function generateRandomPassword(length = 8) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
