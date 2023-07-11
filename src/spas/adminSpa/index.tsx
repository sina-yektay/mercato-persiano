import dynamic from "next/dynamic";

const AdminSpa = dynamic(
  () => import("./AppWrapper").then((module) => module.default),
  {
    ssr: false,
  }
);

export default AdminSpa;
