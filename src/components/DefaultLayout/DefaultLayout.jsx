import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

export default function DefaultLayout() {
  return (
    <div className="vh-100">
      <Navbar />
      <main className="h-100">
        <Outlet />
      </main>
    </div>
  );
}
