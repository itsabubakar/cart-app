import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Rootlayout = () => {
    return (
        <main className="relative bg-blue-400 h-screen">
            <Sidebar />
            <div className="ml-[120px]">
                <Outlet />
            </div>
        </main>
    )
}
export default Rootlayout